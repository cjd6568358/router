#!/usr/bin/env python3

## 通过原版固件生成breed用的eeprom
## ver 1.0
## contact hyx0329@163.com

import sys

# 中兴MAC注册数据库
zte_database = [b'\x00\x15\xEB', b'\x00\x19\xC6', b'\x00\x1E\x73', b'\x00\x22\x93', b'\x00\x25\x12', b'\x00\x26\xED', b'\x00\x4A\x77', b'\x04\x1D\xC7', b'\x04\x95\x73', b'\x08\x18\x1A', b'\x08\x3F\xBC', b'\x08\x60\x83', b'\x0C\x12\x62', b'\x0C\x37\x47', b'\x0C\x72\xD9', b'\x10\xD0\xAB', b'\x14\x3E\xBF', b'\x14\x60\x80', b'\x18\x13\x2D', b'\x18\x44\xE6', b'\x18\x68\x6A', b'\x1C\x27\x04', b'\x20\x89\x86', b'\x20\xE8\x82', b'\x24\x58\x6E', b'\x24\x7E\x51', b'\x24\xC4\x4A', b'\x24\xD3\xF2', b'\x28\x7B\x09', b'\x28\x8C\xB8', b'\x28\xFF\x3E', b'\x2C\x26\xC5', b'\x2C\x95\x7F', b'\x30\x0C\x23', b'\x30\x99\x35', b'\x30\xD3\x86', b'\x30\xF3\x1D', b'\x34\x37\x59', b'\x34\x4B\x50', b'\x34\x4D\xEA', b'\x34\x69\x87', b'\x34\xDA\xB7', b'\x34\xDE\x34', b'\x34\xE0\xCF', b'\x38\x46\x08', b'\x38\x6E\x88', b'\x38\xD8\x2F', b'\x38\xE1\xAA', b'\x38\xE2\xDD', b'\x3C\xDA\x2A', b'\x44\x13\xD0', b'\x44\xF4\x36', b'\x44\xFB\x5A', b'\x44\xFF\xBA', b'\x48\x28\x2F', b'\x48\x59\xA4', b'\x48\xA7\x4E', b'\x4C\x09\xB4', b'\x4C\x16\xF1', b'\x4C\x49\x4F', b'\x4C\xAB\xFC', b'\x4C\xAC\x0A', b'\x4C\xCB\xF5', b'\x50\x78\xB3', b'\x50\xAF\x4D', b'\x54\x09\x55', b'\x54\x22\xF8', b'\x54\xBE\x53', b'\x58\x5F\xF6', b'\x5C\x3A\x3D', b'\x60\x14\x66', b'\x60\x18\x88', b'\x60\x73\xBC', b'\x64\x13\x6C', b'\x68\x1A\xB2', b'\x68\x8A\xF0', b'\x68\x9F\xF0', b'\x6C\x8B\x2F', b'\x6C\xA7\x5F', b'\x6C\xD2\xBA', b'\x70\x2E\x22', b'\x70\x9F\x2D', b'\x74\x4A\xA4', b'\x74\x97\x81', b'\x74\xA7\x8E', b'\x74\xB5\x7E', b'\x78\x1D\x4A', b'\x78\x31\x2B', b'\x78\x96\x82', b'\x78\xC1\xA7', b'\x78\xE8\xB6', b'\x7C\x39\x53', b'\x80\xB0\x7B', b'\x84\x13\x9F', b'\x84\x1C\x70', b'\x84\x74\x2A', b'\x84\x74\x60', b'\x88\x5D\xFB', b'\x88\xD2\x74', b'\x8C\x14\xB4', b'\x8C\x68\xC8', b'\x8C\x79\x67', b'\x8C\xDC\x02', b'\x8C\xE0\x81', b'\x8C\xE1\x17', b'\x90\x1D\x27', b'\x90\x86\x9B', b'\x90\xC7\xD8', b'\x90\xD8\xF3', b'\x90\xFD\x73', b'\x94\xA7\xB7', b'\x94\xBF\x80', b'\x98\x13\x33', b'\x98\x6C\xF5', b'\x98\xF4\x28', b'\x98\xF5\x37', b'\x9C\x63\xED', b'\x9C\x6F\x52', b'\x9C\xA9\xE4', b'\x9C\xD2\x4B', b'\x9C\xE9\x1C', b'\xA0\x91\xC8', b'\xA0\xEC\x80', b'\xA4\x40\x27', b'\xA4\x7E\x39', b'\xA8\xA6\x68', b'\xAC\x00\xD0', b'\xAC\x64\x62', b'\xB0\x0A\xD5', b'\xB0\x75\xD5', b'\xB0\xAC\xD2', b'\xB0\xC1\x9E', b'\xB4\x1C\x30', b'\xB4\x98\x42', b'\xB4\xB3\x62', b'\xB4\xDE\xDF', b'\xB8\x05\xAB', b'\xC0\x9F\xE1', b'\xC0\xFD\x84', b'\xC4\x74\x1E', b'\xC4\xA3\x66', b'\xC8\x5A\x9F', b'\xC8\x64\xC7', b'\xC8\x7B\x5B', b'\xC8\xEA\xF8', b'\xCC\x1A\xFA', b'\xCC\x7B\x35', b'\xD0\x15\x4A', b'\xD0\x58\xA8', b'\xD0\x5B\xA8', b'\xD0\x60\x8C', b'\xD0\x71\xC4', b'\xD4\x37\xD7', b'\xD4\x72\x26', b'\xD4\x76\xEA', b'\xD4\x9E\x05', b'\xD4\xB7\x09', b'\xD4\xC1\xC8', b'\xD8\x55\xA3', b'\xD8\x74\x95', b'\xDC\x02\x8E', b'\xDC\x71\x37', b'\xDC\xDF\xD6', b'\xDC\xF8\xB9', b'\xE0\x19\x54', b'\xE0\x38\x3F', b'\xE0\x7C\x13', b'\xE0\xC3\xF3', b'\xE4\x47\xB3', b'\xE4\x77\x23', b'\xE4\x7E\x9A', b'\xE4\xBD\x4B', b'\xE4\xCA\x12', b'\xE8\xAC\xAD', b'\xE8\xB5\x41', b'\xEC\x1D\x7F', b'\xEC\x23\x7B', b'\xEC\x82\x63', b'\xEC\x8A\x4C', b'\xEC\xF0\xFE', b'\xF0\x84\xC9', b'\xF4\x1F\x88', b'\xF4\x6D\xE2', b'\xF4\xB5\xAA', b'\xF4\xB8\xA7', b'\xF4\xE4\xAD', b'\xF8\x0D\xF0', b'\xF8\xA3\x4F', b'\xF8\xDF\xA8', b'\xFC\x2D\x5E', b'\xFC\x94\xCE', b'\xFC\xC8\x97']

# 获取2.4G参数
# 失败返回空
def get_param_24g(file):
    file.seek(0x36F000,0)
    param = file.read(0x130)
    check = bytearray(param)[:2]
    if check == b'\x03\x76':
        return param
    return None

# 获取5G参数
# 失败返回空
def get_param_5g(file):
    file.seek(0x36F800,0)
    param = file.read(0x1F0)
    check = bytearray(param)[:2]
    if check == b'\x62\x76':
        return param
    return None

# 获取2.4G MAC地址
# 失败返回空
def get_mac_24g(file):
    file.seek(0x220012,0)
    mac = file.read(0x6)
    check = bytearray(mac)[:3]
    if check in zte_database:
        return mac
    return None

# 获取5G MAC地址
# 失败返回空
def get_mac_5g(file):
    file.seek(0x22001E,0)
    mac = file.read(0x6)
    check = bytearray(mac)[:3]
    if check in zte_database:
        return mac
    return None

# 写操作
def write_eeprom(data:list, filename, size):
    file = open(filename, 'xb')

    data = sorted(data, key=lambda x:x['offset'])
    for entry in data:
        while file.tell() < entry['offset']:
            file.write(b'\xff')
        file.write(entry['data'])
    while file.tell() < size:
        file.write(b'\xff')
    file.close()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage:",sys.argv[0],"inputfile outputfile")
        exit(1)

    inputfile = sys.argv[1]
    outputfile = sys.argv[2]

    # inputfile = 'mtd0.bin'
    # outputfile = 'eeprom.bin'

    with open(inputfile, 'rb') as f:
        mac24g = get_mac_24g(f)
        print(mac24g)
        mac5g = get_mac_5g(f)
        print(mac5g)
        param24g = get_param_24g(f)
        param5g = get_param_5g(f)
        
    data = [
        {
            'offset': 0x0,
            'data': param24g
        },
        {
            'offset': 0x8000,
            'data': param5g
        },
        {
            'offset': 0xe000,
            'data': mac24g
        },
        {
            'offset': 0xe006,
            'data': mac5g
        },
        {
            'offset': 0x81e0,
            'data': b'\xC0\x81\x82\xC3\x04\x45\x46\x07\x08\x09'
        }
    ]

    for data_ in data:
        if data_['data'] == None:
            print('Data error! Please check the stock firmware!11111')
            print('数据有误！ 请手动操作！')
            exit(1)
    
    try:
        write_eeprom(data, outputfile, 64*1024)
    except TypeError:
        print('Data error! Please check the stock firmware!')
        print('数据有误！ 请手动操作！')
        exit(1)
    except FileExistsError:
        print("Please check the file's name! I won't overwrite existing files!")
        print("请检查文件名！ 本脚本为安全起见不会覆盖已有文件！")
        exit(1)

