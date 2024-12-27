
# 1.空间坐标系转换


```python
# -*- coding:utf-8 -*-

from __future__ import division 
from math import sqrt,pi,sin,cos,atan2
from scipy.optimize import fsolve
# google: wgtochina_lb
# a python binding of https://on4wp7.codeplex.com/SourceControl/changeset/view/21483#353936
# Krasovsky 1940
#
# a = 6378245.0, 1/f = 298.3
# b = a * (1 - f)
# ee = (a^2 - b^2) / a^2
a = 6378245.0
ee = 0.00669342162296594323

# 来源：https://github.com/scateu/PyWGS84ToGCJ02
# World Geodetic System ==> Mars Geodetic System
def wgs2Mars(wgLat, wgLon):
    """
    transform(latitude,longitude) , WGS84
    return (latitude,longitude) , GCJ02
    """
    if (outOfChina(wgLat, wgLon)):
        mgLat = wgLat
        mgLon = wgLon
        return
    dLat = transformLat(wgLon - 105.0, wgLat - 35.0)
    dLon = transformLon(wgLon - 105.0, wgLat - 35.0)
    radLat = wgLat / 180.0 * pi
    magic = sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * cos(radLat) * pi)
    mgLat = wgLat + dLat
    mgLon = wgLon + dLon
    return (mgLat,mgLon)

def outOfChina(lat, lon):
    if (lon < 72.004 or lon > 137.8347):
        return True
    if (lat < 0.8293 or lat > 55.8271):
        return True
    return False

def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * sqrt(abs(x))
    ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * sin(y * pi) + 40.0 * sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * sin(y / 12.0 * pi) + 320 * sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * sqrt(abs(x))
    ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * sin(x * pi) + 40.0 * sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * sin(x / 12.0 * pi) + 300.0 * sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# liqiangjl@qq.com
def fn(wgs, *args):
    mars = wgs2Mars(wgs[0], wgs[1])
    return (mars[0]-args[0], mars[1]-args[1])
# liqiangjl@qq.com
def mars2Wgs(lat, lng):
    wgs = fsolve(fn, x0=(lat, lng), args=(lat,lng))
    return (wgs[0],wgs[1])

#http://blog.csdn.net/coolypf/article/details/8569813
#火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法
def baidu2Mars(bd_lat, bd_lon):
    x_pi = pi * 3000.0 / 180.0
    x = bd_lon - 0.0065
    y = bd_lat - 0.006
    z = sqrt(x * x + y * y) - 0.00002 * sin(y * x_pi)
    theta = atan2(y, x) - 0.000003 * cos(x * x_pi)
    gg_lon = z * cos(theta)
    gg_lat = z * sin(theta)
    return (gg_lat,gg_lon)
#http://blog.csdn.net/coolypf/article/details/8569813
#火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法
def mars2Baidu(gg_lat, gg_lon):
    x_pi = pi * 3000.0 / 180.0;  
    x = gg_lon
    y = gg_lat
    z = sqrt(x * x + y * y) + 0.00002 * sin(y * x_pi)
    theta = atan2(y, x) + 0.000003 * cos(x * x_pi)
    bd_lon = z * cos(theta) + 0.0065
    bd_lat = z * sin(theta) + 0.006
    return (bd_lat, bd_lon)


if __name__ == "__main__":
    #输出与高德api的比较，http://restapi.amap.com/v3/assistant/coordinate/convert?key=8c8a78d3e87d0e2ac49c28ba033c9b1e&locations=116.481499,39.990475&coordsys=gps
    print("wgs2mars:   %.8f,%.8f"%(wgs2Mars(39.990475,116.481499)))
    print("answer:     %.8f,%.8f"%(39.99175401,116.48758517))    

    # print("*****")
    print("mars2wgs:   %.8f,%.8f"%(mars2Wgs(39.99175401,116.48758517)))
    print("answer:     %.8f,%.8f"%(39.990475,116.481499))        

    # print("*****")
    print("baidu2mars: %.8f,%.8f"%(baidu2Mars(39.990475,116.481499)))
    print("answer:     %.8f,%.8f"%(39.98471716,116.47489552))    

    # print("*****")
    print("mars2baidu: %.8f,%.8f" %(mars2Baidu(39.984717169345,116.4748955248)))
    print("answer:     %.8f,%.8f"%(39.990475,  116.481499))

    ##输出与高德api的比较，http://restapi.amap.com/v3/assistant/coordinate/convert?key=8c8a78d3e87d0e2ac49c28ba033c9b1e&locations=114.07,22.62&coordsys=gps
    # print("*****")
    print("wgs2mars for shenzhen:  %.8f,%.8f"%(wgs2Mars(22.62,114.07))) 
    print("answer:                 %.8f,%.8f"%(22.61731092,114.07513075))


    #其他版本之间的比较
    #116.487585177952,39.991754014757 #高德结果
    #116.48758557,    39.99175425     #python版本 厘米级误差
    #116.487585570810,39.991754254673133 c#版本 与python是一致的
```

# 2、WGS坐标直线距离计算

```python
import math

pi = 3.1415
EARTH_REDIUS = 6378.137

def rad(d):
    return d * pi / 180.0

def getDistance(lat1, lng1, lat2, lng2):
    """
    lat:维度，lng:经度，不是特别精确
    """
    radLat1 = rad(lat1)
    radLat2 = rad(lat2)
    a = radLat1 - radLat2
    b = rad(lng1) - rad(lng2)
    s = 2 * math.asin(math.sqrt(math.pow(math.sin(a/2), 2) + math.cos(radLat1) * math.cos(radLat2) * math.pow(math.sin(b/2), 2)))
    s = s * EARTH_REDIUS
    return s
```


## 3、常见处理

```python
link_shp = r"C:\Users\Administrator\Desktop\temp\202301110\20230110.shp"
node_shp = r"C:\Users\Administrator\Desktop\temp\202301110\emme_nodes.shp"

shp_file = r"C:/Users/Administrator/Desktop/temp/20230816/link.shp"
out_shp =  r"C:/Users/Administrator/Desktop/temp/20230816/link_dir.shp"

def vector(link_df):
    """
    方向识别
    :return:
    """
    vector_att = []
    for index, link in link_df.iterrows():
        # print(link)
        from_x, to_x = link["geometry"].xy[0][0], link["geometry"].xy[0][-1]
        from_y, to_y = link["geometry"].xy[1][0], link["geometry"].xy[1][-1]
        # print(from_x, from_y,to_x, to_y)
        # degree = latlng2degree(from_y,from_x,to_y,to_y)
        degree = latlng2degree(from_y, from_x, to_y, to_x)
        print(degree)
        if degree < 135 and degree >= 45:
            print("西向东")
            str_vet = "西向东"
        elif degree <225 and degree>=135:
            print("北向南")
            str_vet = "北向南"
        elif degree <315 and degree>=225:
            print("东向西")
            str_vet = "东向西"
        elif degree < 45 or degree >=315:
            print("南向北")
            str_vet = "南向北"
        else:
            print("other vet")
            str_vet = "other"

        vector_att.append(str_vet)
        # if index > 50:
        #     break
    link_df["dir_geo"] = vector_att
    return link_df


def latlng2degree(latfrom,lngfrom,latto,lngto):
    """
    计算方向夹角
    :param latfrom:维度
    :param lngfrom:
    :param latto:
    :param lngto:
    :return:
    """
    radlat_a = math.radians(latfrom)
    radlon_a = math.radians(lngfrom)

    radlat_b = math.radians(latto)
    radlon_b = math.radians(lngto)

    dlon = radlon_b - radlon_a
    # dlat = radlat_b - radlat_a
    y = math.sin(dlon)*math.cos(radlat_b)
    x = math.cos(radlat_a)*math.sin(radlat_b) - math.sin(radlat_a) * math.cos(radlat_b)*math.cos(dlon)

    brng = math.degrees(math.atan2(y,x))
    # brng = 90-brng
    brng = (brng+360)%360

    # dlon = lngto - lngfrom
    # dlat = latto - latfrom
    # brng = math.degrees(math.atan2(dlon,dlat))
    # if brng < 0:
    #     brng = brng+360
    # elif brng > 360:
    #     brng = brng-360
    return brng


if __name__ == "__main__":

    link_gdf = gpd.read_file(shp_file, encodings="gbk")
    link_gdf = link_gdf.set_crs("EPSG:4326")
    # link_gdf = link_gdf.to_crs("EPSG:3857")

    # node_gdf = gpd.read_file(node_shp, encodings="gbk")
    # node_gdf = node_gdf.set_crs("EPSG:4326")
    out_file = "./output/link_shp.shp"
    df_link = vector(link_gdf)
    df_link.to_file(out_shp, encoding="gbk", geometry_name='geometry')
    # df_link.to_csv("./output/link_att.csv",encoding="gbk")

```

