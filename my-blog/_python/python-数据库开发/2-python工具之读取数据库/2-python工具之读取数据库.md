
- 描述：读取数据库下所有表格并写在word中​
# 1、数据库读取

```python
# -*- coding: utf-8 -*-
"""
Created on Mon Sep 28 10:40:13 2020
    功能：数据库功能读取
# @author: lhy
# @Time    : 2022/3/1 10:06
# @email   : 742232975@qq.com
"""
import psycopg2
from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.shared import Cm
import pandas as pd


class PostGreData(object):
    """数据库"""
    def __init__(self):
        self.dbname = "wh_tp_index"
        self.user = "wh_tp"
        self.password = "bONM46n8h2D89J3u"
        self.host = "10.10.5.127"
        self.port = "5433"

        self.con_db = psycopg2.connect(dbname=self.dbname, user=self.user, password=self.password,
                                       host=self.host, port=self.port)

    def __del__(self):
        self.con_db.close()

    def read_table_name(self):
        """读取所有表名"""
        key_select = "select * from pg_tables where schemaname = 'public';"
        data_table = pd.read_sql(key_select, con=self.con_db)
        return data_table

    def read_table_columns(self, columns_name):
        print(columns_name)
        key_select = "select * from information_schema.columns where table_schema='public' and table_name= '%s'" % (columns_name)
        table_columns = pd.read_sql(key_select, con=self.con_db)
        return table_columns

    def get_data_from_sql(self):
        try:
            with self.con_db.cursor() as cursor:
                sqlstr_clos = """
                    select
                      c.relname 表名,
                      cast(obj_description(relfilenode,'pg_class') as varchar) 名称,
                      a.attname 字段,
                      d.description 字段备注,
                      concat_ws('',t.typname,SUBSTRING(format_type(a.atttypid,a.atttypmod) from '\(.*\)')) as 列类型
                    from
                      pg_class c,
                      pg_attribute a,
                      pg_type t,
                      pg_description d
                    where
                      a.attnum>0
                      and
                      a.attrelid=c.oid
                      and
                      a.atttypid=t.oid
                      and
                      d.objoid=a.attrelid
                      and
                      d.objsubid=a.attnum
                      and
                      c.relname in (
                        select
                        tablename
                        from
                        pg_tables
                        where
                        schemaname='public'
                        and
                        position('_2' in tablename)=0
                        )
                        """
                cursor.execute(sqlstr_clos)
                res = cursor.fetchall()
                df = pd.DataFrame(res, columns=["table_name", "class", "atname", "dsc", "type"])
                return df
        except Exception as e:
            print(e.args)


class WordWrite(object):
    def __init__(self):
        self.d_word = Document()

    def add_table(self, df):
        tb = self.d_word.add_table(rows=len(df.index)+1,cols=len(df.columns))
        tb.add_row()
        for i in range(len(df.columns)):
            tb.cell(0, i).text = df.columns[i]
        for row in range(0, len(df.index)):
            for col in range(len(df.columns)):
                tb.cell(row+1, col).width = 1
                if df.iloc[row, col] is None:
                    tb.cell(row+1, col).text = u"None"
                else:
                    tb.cell(row+1, col).text = df.iloc[row, col]  # .decode("unicode-escape")
                tb.cell(row+1, col).width = Cm(6)
                # tb.cell(row,col).ipynb
        tb.style = "Medium Grid 1 Accent 1"
        tb.autofit = True

    def save_file(self, file_name):
        self.d_word.save(file_name)

    def write_data(self, data):
        """写数据"""
        p = self.d_word.add_paragraph(data)
        p = self.d_word.add_paragraph()


if __name__ == "__main__":
    post_data = PostGreData()
    word_write = WordWrite()

    df_table = post_data.get_data_from_sql()
    out_file = "./output/df_table.docx"

    for table_name,df_t in df_table.groupby(["table_name"]):
        word_write.write_data(table_name)
        df_t.encoding="utf-8"
        word_write.add_table(df_t)
    word_write.save_file(out_file)
```
