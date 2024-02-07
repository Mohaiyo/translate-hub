import alfy, { type ScriptFilterItem } from 'alfy'

const presetApis: ScriptFilterItem[] = [
  {
    arg: 'platform,alimt',
    title: 'Alibaba Cloud Translation',
    subtitle:
      'Alibaba Cloud Translation: The first 1 million characters per month are free for the General Edition of machine translation. Charges of 50 RMB per million characters will apply for any exceeding usage.',
    icon: { path: './src/assets/images/aliyun.png' },
    variables: {
      name: 'Alibaba Cloud Translation'
    }
  },
  {
    arg: 'platform,openai',
    title: 'OpenAI',
    subtitle: 'OpenAI: Use OpenAI as your translation assistant',
    icon: { path: './src/assets/images/openai.png' },
    variables: {
      name: 'OpenAI'
    }
  },
  {
    arg: 'platform,volcenginemt',
    title: 'Volcano Translation',
    subtitle:
      'Volcano Translation: The first 2 million characters per month are free. Charges of 49 RMB per million characters will apply for any exceeding usage. For specific details, please refer to the official pricing documentation.',
    icon: { path: './src/assets/images/volcengine.png' },
    variables: {
      name: 'Volcano Translation'
    }
  },
  {
    arg: 'platform,azuremt',
    title: 'Azure Translation',
    subtitle:
      'Microsoft Azure Cloud Translation: Translation of up to 2 million words per month is free. If you exceed 2 million words monthly, charges will apply at a rate of $10 per million words. For further details, please consult the official pricing documentation.',
    icon: { path: './src/assets/images/azure-logo.png' },
    variables: {
      name: 'Azure Translation'
    }
  },
  {
    arg: 'platform,baidumt',
    title: 'Baidu Translation',
    subtitle: `Baidu Translation: Provide standard version, advanced version, exclusive version of the service, complete identity authentication, enjoy a maximum of 2 million free characters per month`,
    icon: { path: './src/assets/images/baidu.png' },
    variables: {
      name: 'Baidu Translation'
    }
  }
]
const presetTargetLanguage: ScriptFilterItem[] = [
  { subtitle: '阿布哈兹语', title: 'Abkhazian', arg: 'target,ab', variables: { target: 'Abkhazian' } },
  { subtitle: '阿尔巴尼亚语', title: 'Albanian', arg: 'target,sq', variables: { target: 'Albanian' } },
  { subtitle: '阿肯语', title: 'Akan', arg: 'target,ak', variables: { target: 'Akan' } },
  { subtitle: '阿拉伯语', title: 'Arabic', arg: 'target,ar', variables: { target: 'Arabic' } },
  { subtitle: '阿拉贡语', title: 'Aragonese', arg: 'target,an', variables: { target: 'Aragonese' } },
  { subtitle: '阿姆哈拉语', title: 'Amharic', arg: 'target,am', variables: { target: 'Amharic' } },
  { subtitle: '阿萨姆语', title: 'Assamese', arg: 'target,as', variables: { target: 'Assamese' } },
  { subtitle: '阿塞拜疆语', title: 'Azerbaijani', arg: 'target,az', variables: { target: 'Azerbaijani' } },
  { subtitle: '阿斯图里亚斯语', title: 'Asturian', arg: 'target,ast', variables: { target: 'Asturian' } },
  { subtitle: '阿兹特克语', title: 'Central Huasteca Nahuatl', arg: 'target,nch', variables: { target: 'Central' } },
  { subtitle: '埃维语', title: 'Ewe', arg: 'target,ee', variables: { target: 'Ewe' } },
  { subtitle: '艾马拉语', title: 'Aymara', arg: 'target,ay', variables: { target: 'Aymara' } },
  { subtitle: '爱尔兰语', title: 'Irish', arg: 'target,ga', variables: { target: 'Irish' } },
  { subtitle: '爱沙尼亚语', title: 'Estonian', arg: 'target,et', variables: { target: 'Estonian' } },
  { subtitle: '奥杰布瓦语', title: 'Ojibwa', arg: 'target,oj', variables: { target: 'Ojibwa' } },
  { subtitle: '奥克语', title: 'Occitan', arg: 'target,oc', variables: { target: 'Occitan' } },
  { subtitle: '奥里亚语', title: 'Oriya', arg: 'target,or', variables: { target: 'Oriya' } },
  { subtitle: '奥罗莫语', title: 'Oromo', arg: 'target,om', variables: { target: 'Oromo' } },
  { subtitle: '奥塞梯语', title: 'Ossetian', arg: 'target,os', variables: { target: 'Ossetian' } },
  { subtitle: '巴布亚皮钦语', title: 'Tok Pisin', arg: 'target,tpi', variables: { target: 'Tok' } },
  { subtitle: '巴什基尔语', title: 'Bashkir', arg: 'target,ba', variables: { target: 'Bashkir' } },
  { subtitle: '巴斯克语', title: 'Basque', arg: 'target,eu', variables: { target: 'Basque' } },
  { subtitle: '白俄罗斯语', title: 'Belarusian', arg: 'target,be', variables: { target: 'Belarusian' } },
  { subtitle: '柏柏尔语', title: 'Berber languages', arg: 'target,ber', variables: { target: 'Berber' } },
  { subtitle: '班巴拉语', title: 'Bambara', arg: 'target,bm', variables: { target: 'Bambara' } },
  { subtitle: '邦阿西楠语', title: 'Pangasinan', arg: 'target,pag', variables: { target: 'Pangasinan' } },
  { subtitle: '保加利亚语', title: 'Bulgarian', arg: 'target,bg', variables: { target: 'Bulgarian' } },
  { subtitle: '北萨米语', title: 'Northern Sami', arg: 'target,se', variables: { target: 'Northern' } },
  { subtitle: '本巴语', title: 'Bemba (Zambia)', arg: 'target,bem', variables: { target: 'Bemba' } },
  { subtitle: '比林语', title: 'Blin', arg: 'target,byn', variables: { target: 'Blin' } },
  { subtitle: '比斯拉马语', title: 'Bislama', arg: 'target,bi', variables: { target: 'Bislama' } },
  { subtitle: '俾路支语', title: 'Baluchi', arg: 'target,bal', variables: { target: 'Baluchi' } },
  { subtitle: '冰岛语', title: 'Icelandic', arg: 'target,is', variables: { target: 'Icelandic' } },
  { subtitle: '波兰语', title: 'Polish', arg: 'target,pl', variables: { target: 'Polish' } },
  { subtitle: '波斯尼亚语', title: 'Bosnian', arg: 'target,bs', variables: { target: 'Bosnian' } },
  { subtitle: '波斯语', title: 'Persian', arg: 'target,fa', variables: { target: 'Persian' } },
  { subtitle: '博杰普尔语', title: 'Bhojpuri', arg: 'target,bho', variables: { target: 'Bhojpuri' } },
  { subtitle: '布列塔尼语', title: 'Breton', arg: 'target,br', variables: { target: 'Breton' } },
  { subtitle: '查莫罗语', title: 'Chamorro', arg: 'target,ch', variables: { target: 'Chamorro' } },
  { subtitle: '查瓦卡诺语', title: 'Chavacano', arg: 'target,cbk', variables: { target: 'Chavacano' } },
  { subtitle: '楚瓦什语', title: 'Chuvash', arg: 'target,cv', variables: { target: 'Chuvash' } },
  { subtitle: '聪加语', title: 'Tsonga', arg: 'target,ts', variables: { target: 'Tsonga' } },
  { subtitle: '鞑靼语', title: 'Tatar', arg: 'target,tt', variables: { target: 'Tatar' } },
  { subtitle: '丹麦语', title: 'Danish', arg: 'target,da', variables: { target: 'Danish' } },
  { subtitle: '掸语', title: 'Shan', arg: 'target,shn', variables: { target: 'Shan' } },
  { subtitle: '德顿语', title: 'Tetum', arg: 'target,tet', variables: { target: 'Tetum' } },
  { subtitle: '德语', title: 'German', arg: 'target,de', variables: { target: 'German' } },
  { subtitle: '低地德语', title: 'Low German', arg: 'target,nds', variables: { target: 'Low' } },
  { subtitle: '低地苏格兰语', title: 'Scots', arg: 'target,sco', variables: { target: 'Scots' } },
  { subtitle: '迪维西语', title: 'Dhivehi', arg: 'target,dv', variables: { target: 'Dhivehi' } },
  { subtitle: '侗语', title: 'Kam', arg: 'target,kdx', variables: { target: 'Kam' } },
  { subtitle: '杜順語', title: 'Kadazan Dusun', arg: 'target,dtp', variables: { target: 'Kadazan' } },
  { subtitle: '俄语', title: 'Russian', arg: 'target,ru', variables: { target: 'Russian' } },
  { subtitle: '法罗语', title: 'Faroese', arg: 'target,fo', variables: { target: 'Faroese' } },
  { subtitle: '法语', title: 'French', arg: 'target,fr', variables: { target: 'French' } },
  { subtitle: '梵语', title: 'Sanskrit', arg: 'target,sa', variables: { target: 'Sanskrit' } },
  { subtitle: '菲律宾语', title: 'Filipino', arg: 'target,fil', variables: { target: 'Filipino' } },
  { subtitle: '斐济语', title: 'Fijian', arg: 'target,fj', variables: { target: 'Fijian' } },
  { subtitle: '芬兰语', title: 'Finnish', arg: 'target,fi', variables: { target: 'Finnish' } },
  { subtitle: '弗留利语', title: 'Friulian', arg: 'target,fur', variables: { target: 'Friulian' } },
  { subtitle: '富尔语', title: 'Fur', arg: 'target,fvr', variables: { target: 'Fur' } },
  { subtitle: '刚果语', title: 'Kongo', arg: 'target,kg', variables: { target: 'Kongo' } },
  { subtitle: '高棉语', title: 'Khmer', arg: 'target,km', variables: { target: 'Khmer' } },
  {
    subtitle: '格雷罗纳瓦特尔语',
    title: 'Guerrero Nahuatl',
    arg: 'target,ngu',
    variables: { target: 'Guerrero Nahuatl' }
  },
  { subtitle: '格陵兰语', title: 'Kalaallisut', arg: 'target,kl', variables: { target: 'Kalaallisut' } },
  { subtitle: '格鲁吉亚语', title: 'Georgian', arg: 'target,ka', variables: { target: 'Georgian' } },
  { subtitle: '格罗宁根方言', title: 'Gronings', arg: 'target,gos', variables: { target: 'Gronings' } },
  { subtitle: '古吉拉特语', title: 'Gujarati', arg: 'target,gu', variables: { target: 'Gujarati' } },
  { subtitle: '瓜拉尼语', title: 'Guarani', arg: 'target,gn', variables: { target: 'Guarani' } },
  { subtitle: '哈萨克语', title: 'Kazakh', arg: 'target,kk', variables: { target: 'Kazakh' } },
  { subtitle: '海地克里奥尔语', title: 'Haitian', arg: 'target,ht', variables: { target: 'Haitian' } },
  { subtitle: '韩语', title: 'Korean', arg: 'target,ko', variables: { target: 'Korean' } },
  { subtitle: '豪萨语', title: 'Hausa', arg: 'target,ha', variables: { target: 'Hausa' } },
  { subtitle: '荷兰语', title: 'Dutch', arg: 'target,nl', variables: { target: 'Dutch' } },
  { subtitle: '黑山语', title: 'Montenegrin', arg: 'target,cnr', variables: { target: 'Montenegrin' } },
  { subtitle: '胡帕语', title: 'Hupa', arg: 'target,hup', variables: { target: 'Hupa' } },
  { subtitle: '基里巴斯语', title: 'Gilbertese', arg: 'target,gil', variables: { target: 'Gilbertese' } },
  { subtitle: '基隆迪语', title: 'Rundi', arg: 'target,rn', variables: { target: 'Rundi' } },
  { subtitle: '基切语', title: 'K\'iche\'', arg: 'target,quc', variables: { target: 'K' } },
  { subtitle: '吉尔吉斯斯坦语', title: 'Kirghiz', arg: 'target,ky', variables: { target: 'Kirghiz' } },
  { subtitle: '加利西亚语', title: 'Galician', arg: 'target,gl', variables: { target: 'Galician' } },
  { subtitle: '加泰罗尼亚语', title: 'Catalan', arg: 'target,ca', variables: { target: 'Catalan' } },
  { subtitle: '捷克语', title: 'Czech', arg: 'target,cs', variables: { target: 'Czech' } },
  { subtitle: '卡拜尔语', title: 'Kabyle', arg: 'target,kab', variables: { target: 'Kabyle' } },
  { subtitle: '卡纳达语', title: 'Kannada', arg: 'target,kn', variables: { target: 'Kannada' } },
  { subtitle: '卡努里语', title: 'Kanuri', arg: 'target,kr', variables: { target: 'Kanuri' } },
  { subtitle: '卡舒比语', title: 'Kashubian', arg: 'target,csb', variables: { target: 'Kashubian' } },
  { subtitle: '卡西语', title: 'Khasi', arg: 'target,kha', variables: { target: 'Khasi' } },
  { subtitle: '康沃尔语', title: 'Cornish', arg: 'target,kw', variables: { target: 'Cornish' } },
  { subtitle: '科萨语', title: 'Xhosa', arg: 'target,xh', variables: { target: 'Xhosa' } },
  { subtitle: '科西嘉语', title: 'Corsican', arg: 'target,co', variables: { target: 'Corsican' } },
  { subtitle: '克里克语', title: 'Creek', arg: 'target,mus', variables: { target: 'Creek' } },
  { subtitle: '克里米亚鞑靼语', title: 'Crimean Tatar', arg: 'target,crh', variables: { target: 'Crimean' } },
  { subtitle: '克林贡语', title: 'Klingon', arg: 'target,tlh', variables: { target: 'Klingon' } },
  { subtitle: '克罗地亚语', title: 'Serbo-Croatian', arg: 'target,hbs', variables: { target: 'Serbo' } },
  { subtitle: '克丘亚语', title: 'Quechua', arg: 'target,qu', variables: { target: 'Quechua' } },
  { subtitle: '克什米尔语', title: 'Kashmiri', arg: 'target,ks', variables: { target: 'Kashmiri' } },
  { subtitle: '库尔德语', title: 'Kurdish', arg: 'target,ku', variables: { target: 'Kurdish' } },
  { subtitle: '拉丁语', title: 'Latin', arg: 'target,la', variables: { target: 'Latin' } },
  { subtitle: '拉特加莱语', title: 'Latgalian', arg: 'target,ltg', variables: { target: 'Latgalian' } },
  { subtitle: '拉脱维亚语', title: 'Latvian', arg: 'target,lv', variables: { target: 'Latvian' } },
  { subtitle: '老挝语', title: 'Lao', arg: 'target,lo', variables: { target: 'Lao' } },
  { subtitle: '立陶宛语', title: 'Lithuanian', arg: 'target,lt', variables: { target: 'Lithuanian' } },
  { subtitle: '林堡语', title: 'Limburgish', arg: 'target,li', variables: { target: 'Limburgish' } },
  { subtitle: '林加拉语', title: 'Lingala', arg: 'target,ln', variables: { target: 'Lingala' } },
  { subtitle: '卢干达语', title: 'Ganda', arg: 'target,lg', variables: { target: 'Ganda' } },
  { subtitle: '卢森堡语', title: 'Letzeburgesch', arg: 'target,lb', variables: { target: 'Letzeburgesch' } },
  { subtitle: '卢森尼亚语', title: 'Rusyn', arg: 'target,rue', variables: { target: 'Rusyn' } },
  { subtitle: '卢旺达语', title: 'Kinyarwanda', arg: 'target,rw', variables: { target: 'Kinyarwanda' } },
  { subtitle: '罗马尼亚语', title: 'Romanian', arg: 'target,ro', variables: { target: 'Romanian' } },
  { subtitle: '罗曼什语', title: 'Romansh', arg: 'target,rm', variables: { target: 'Romansh' } },
  { subtitle: '罗姆语', title: 'Romany', arg: 'target,rom', variables: { target: 'Romany' } },
  { subtitle: '逻辑语', title: 'Lojban', arg: 'target,jbo', variables: { target: 'Lojban' } },
  { subtitle: '马达加斯加语', title: 'Malagasy', arg: 'target,mg', variables: { target: 'Malagasy' } },
  { subtitle: '马恩语', title: 'Manx', arg: 'target,gv', variables: { target: 'Manx' } },
  { subtitle: '马耳他语', title: 'Maltese', arg: 'target,mt', variables: { target: 'Maltese' } },
  { subtitle: '马拉地语', title: 'Marathi', arg: 'target,mr', variables: { target: 'Marathi' } },
  { subtitle: '马拉雅拉姆语', title: 'Malayalam', arg: 'target,ml', variables: { target: 'Malayalam' } },
  { subtitle: '马来语', title: 'Malay', arg: 'target,ms', variables: { target: 'Malay' } },
  {
    subtitle: '马里语（俄罗斯）',
    title: 'Mari (Russia)',
    arg: 'target,chm',
    variables: { target: 'Mari (Russia)' }
  },
  { subtitle: '马其顿语', title: 'Macedonian', arg: 'target,mk', variables: { target: 'Macedonian' } },
  { subtitle: '马绍尔语', title: 'Marshallese', arg: 'target,mh', variables: { target: 'Marshallese' } },
  { subtitle: '玛雅语', title: 'Kekchí', arg: 'target,kek', variables: { target: 'Kekchí' } },
  { subtitle: '迈蒂利语', title: 'Maithili', arg: 'target,mai', variables: { target: 'Maithili' } },
  { subtitle: '毛里求斯克里奥尔语', title: 'Morisyen', arg: 'target,mfe', variables: { target: 'Morisyen' } },
  { subtitle: '毛利语', title: 'Maori', arg: 'target,mi', variables: { target: 'Maori' } },
  { subtitle: '蒙古语', title: 'Mongolian', arg: 'target,mn', variables: { target: 'Mongolian' } },
  { subtitle: '孟加拉语', title: 'Bengali', arg: 'target,bn', variables: { target: 'Bengali' } },
  { subtitle: '缅甸语', title: 'Burmese', arg: 'target,my', variables: { target: 'Burmese' } },
  { subtitle: '苗语', title: 'Hmong', arg: 'target,hmn', variables: { target: 'Hmong' } },
  { subtitle: '姆班杜语', title: 'Umbundu', arg: 'target,umb', variables: { target: 'Umbundu' } },
  { subtitle: '纳瓦霍语', title: 'Navajo', arg: 'target,nv', variables: { target: 'Navajo' } },
  { subtitle: '南非语', title: 'Afrikaans', arg: 'target,af', variables: { target: 'Afrikaans' } },
  { subtitle: '尼泊尔语', title: 'Nepali', arg: 'target,ne', variables: { target: 'Nepali' } },
  { subtitle: '纽埃语', title: 'Niuean', arg: 'target,niu', variables: { target: 'Niuean' } },
  { subtitle: '挪威语', title: 'Norwegian', arg: 'target,no', variables: { target: 'Norwegian' } },
  { subtitle: '帕姆语', title: 'Pam', arg: 'target,pmn', variables: { target: 'Pam' } },
  { subtitle: '帕皮阿门托语', title: 'Papiamento', arg: 'target,pap', variables: { target: 'Papiamento' } },
  { subtitle: '旁遮普语', title: 'Panjabi', arg: 'target,pa', variables: { target: 'Panjabi' } },
  { subtitle: '葡萄牙语', title: 'Portuguese', arg: 'target,pt', variables: { target: 'Portuguese' } },
  { subtitle: '普什图语', title: 'Pushto', arg: 'target,ps', variables: { target: 'Pushto' } },
  { subtitle: '齐切瓦语', title: 'Nyanja', arg: 'target,ny', variables: { target: 'Nyanja' } },
  { subtitle: '契维语', title: 'Twi', arg: 'target,tw', variables: { target: 'Twi' } },
  { subtitle: '切罗基语', title: 'Cherokee', arg: 'target,chr', variables: { target: 'Cherokee' } },
  { subtitle: '日语', title: 'Japanese', arg: 'target,ja', variables: { target: 'Japanese' } },
  { subtitle: '瑞典语', title: 'Swedish', arg: 'target,sv', variables: { target: 'Swedish' } },
  { subtitle: '萨摩亚语', title: 'Samoan', arg: 'target,sm', variables: { target: 'Samoan' } },
  { subtitle: '桑戈语', title: 'Sango', arg: 'target,sg', variables: { target: 'Sango' } },
  { subtitle: '僧伽罗语', title: 'Sinhala', arg: 'target,si', variables: { target: 'Sinhala' } },
  { subtitle: '上索布语', title: 'Upper Sorbian', arg: 'target,hsb', variables: { target: 'Upper' } },
  { subtitle: '世界语', title: 'Esperanto', arg: 'target,eo', variables: { target: 'Esperanto' } },
  { subtitle: '斯洛文尼亚语', title: 'Slovenian', arg: 'target,sl', variables: { target: 'Slovenian' } },
  { subtitle: '斯瓦希里语', title: 'Swahili', arg: 'target,sw', variables: { target: 'Swahili' } },
  { subtitle: '索马里语', title: 'Somali', arg: 'target,so', variables: { target: 'Somali' } },
  { subtitle: '斯洛伐克语', title: 'Slovak', arg: 'target,sk', variables: { target: 'Slovak' } },
  { subtitle: '他加禄语', title: 'Tagalog', arg: 'target,tl', variables: { target: 'Tagalog' } },
  { subtitle: '塔吉克语', title: 'Tajik', arg: 'target,tg', variables: { target: 'Tajik' } },
  { subtitle: '塔希提语', title: 'Tahitian', arg: 'target,ty', variables: { target: 'Tahitian' } },
  { subtitle: '泰卢固语', title: 'Telugu', arg: 'target,te', variables: { target: 'Telugu' } },
  { subtitle: '泰米尔语', title: 'Tamil', arg: 'target,ta', variables: { target: 'Tamil' } },
  { subtitle: '泰语', title: 'Thai', arg: 'target,th', variables: { target: 'Thai' } },
  {
    subtitle: '汤加语（汤加群岛）',
    title: 'Tonga (Tonga Islands)',
    arg: 'target,to',
    variables: { target: 'Tonga (Tonga Islands)' }
  },
  {
    subtitle: '汤加语（赞比亚）',
    title: 'Tonga (Zambia)',
    arg: 'target,toi',
    variables: { target: 'Tonga (Zambia)' }
  },
  { subtitle: '提格雷尼亚语', title: 'Tigrinya', arg: 'target,ti', variables: { target: 'Tigrinya' } },
  { subtitle: '图瓦卢语', title: 'Tuvalu', arg: 'target,tvl', variables: { target: 'Tuvalu' } },
  { subtitle: '图瓦语', title: 'Tuvinian', arg: 'target,tyv', variables: { target: 'Tuvinian' } },
  { subtitle: '土耳其语', title: 'Turkish', arg: 'target,tr', variables: { target: 'Turkish' } },
  { subtitle: '土库曼语', title: 'Turkmen', arg: 'target,tk', variables: { target: 'Turkmen' } },
  { subtitle: '瓦隆语', title: 'Walloon', arg: 'target,wa', variables: { target: 'Walloon' } },
  {
    subtitle: '瓦瑞语（菲律宾）',
    title: 'Waray (Philippines)',
    arg: 'target,war',
    variables: { target: 'Waray (Philippines)' }
  },
  { subtitle: '威尔士语', title: 'Welsh', arg: 'target,cy', variables: { target: 'Welsh' } },
  { subtitle: '文达语', title: 'Venda', arg: 'target,ve', variables: { target: 'Venda' } },
  { subtitle: '沃拉普克语', title: 'Volapük', arg: 'target,vo', variables: { target: 'Volapük' } },
  { subtitle: '沃洛夫语', title: 'Wolof', arg: 'target,wo', variables: { target: 'Wolof' } },
  { subtitle: '乌德穆尔特语', title: 'Udmurt', arg: 'target,udm', variables: { target: 'Udmurt' } },
  { subtitle: '乌尔都语', title: 'Urdu', arg: 'target,ur', variables: { target: 'Urdu' } },
  { subtitle: '乌孜别克语', title: 'Uzbek', arg: 'target,uz', variables: { target: 'Uzbek' } },
  { subtitle: '西班牙语', title: 'Spanish', arg: 'target,es', variables: { target: 'Spanish' } },
  { subtitle: '西方国际语', title: 'Interlingue', arg: 'target,ie', variables: { target: 'Interlingue' } },
  { subtitle: '西弗里斯兰语', title: 'Western Frisian', arg: 'target,fy', variables: { target: 'Western' } },
  { subtitle: '西里西亚语', title: 'Silesian', arg: 'target,szl', variables: { target: 'Silesian' } },
  { subtitle: '希伯来语', title: 'Hebrew', arg: 'target,he', variables: { target: 'Hebrew' } },
  { subtitle: '希利盖农语', title: 'Hiligaynon', arg: 'target,hil', variables: { target: 'Hiligaynon' } },
  { subtitle: '夏威夷语', title: 'Hawaiian', arg: 'target,haw', variables: { target: 'Hawaiian' } },
  { subtitle: '现代希腊语', title: 'Modern Greek', arg: 'target,el', variables: { target: 'Modern' } },
  { subtitle: '新共同语言', title: 'Lingua Franca Nova', arg: 'target,lfn', variables: { target: 'Lingua' } },
  { subtitle: '信德语', title: 'Sindhi', arg: 'target,sd', variables: { target: 'Sindhi' } },
  { subtitle: '匈牙利语', title: 'Hungarian', arg: 'target,hu', variables: { target: 'Hungarian' } },
  { subtitle: '修纳语', title: 'Shona', arg: 'target,sn', variables: { target: 'Shona' } },
  { subtitle: '宿务语', title: 'Cebuano', arg: 'target,ceb', variables: { target: 'Cebuano' } },
  { subtitle: '叙利亚语', title: 'Syriac', arg: 'target,syr', variables: { target: 'Syriac' } },
  { subtitle: '巽他语', title: 'Sundanese', arg: 'target,su', variables: { target: 'Sundanese' } },
  { subtitle: '亚美尼亚语', title: 'Armenian', arg: 'target,hy', variables: { target: 'Armenian' } },
  { subtitle: '亚齐语', title: 'Achinese', arg: 'target,ace', variables: { target: 'Achinese' } },
  { subtitle: '伊班语', title: 'Iban', arg: 'target,iba', variables: { target: 'Iban' } },
  { subtitle: '伊博语', title: 'Igbo', arg: 'target,ig', variables: { target: 'Igbo' } },
  { subtitle: '伊多语', title: 'Ido', arg: 'target,io', variables: { target: 'Ido' } },
  { subtitle: '伊洛卡诺语', title: 'Iloko', arg: 'target,ilo', variables: { target: 'Iloko' } },
  { subtitle: '伊努克提图特语', title: 'Inuktitut', arg: 'target,iu', variables: { target: 'Inuktitut' } },
  { subtitle: '意大利语', title: 'Italian', arg: 'target,it', variables: { target: 'Italian' } },
  { subtitle: '意第绪语', title: 'Yiddish', arg: 'target,yi', variables: { target: 'Yiddish' } },
  { subtitle: '因特语', title: 'Interlingua', arg: 'target,ia', variables: { target: 'Interlingua' } },
  { subtitle: '印地语', title: 'Hindi', arg: 'target,hi', variables: { target: 'Hindi' } },
  { subtitle: '印度尼西亚语', title: 'Indonesia', arg: 'target,id', variables: { target: 'Indonesia' } },
  { subtitle: '印古什语', title: 'Ingush', arg: 'target,inh', variables: { target: 'Ingush' } },
  { subtitle: '英语', title: 'English', arg: 'target,en', variables: { target: 'English' } },
  { subtitle: '约鲁巴语', title: 'Yoruba', arg: 'target,yo', variables: { target: 'Yoruba' } },
  { subtitle: '越南语', title: 'Vietnamese', arg: 'target,vi', variables: { target: 'Vietnamese' } },
  { subtitle: '扎扎其语', title: 'Zaza', arg: 'target,zza', variables: { target: 'Zaza' } },
  { subtitle: '爪哇语', title: 'Javanese', arg: 'target,jv', variables: { target: 'Javanese' } },
  { subtitle: '中文', title: 'Chinese', arg: 'target,zh', variables: { target: 'Chinese' } },
  { subtitle: '中文繁体', title: 'Traditional Chinese', arg: 'target,zh-tw', variables: { target: 'Traditional' } },
  { subtitle: '中文粤语', title: 'Cantonese', arg: 'target,yue', variables: { target: 'Cantonese' } },
  { subtitle: '祖鲁语', title: 'Zulu', arg: 'target,zu', variables: { target: 'Zulu' } }
]

const alfyInput = alfy.input.trim()

if (alfyInput.startsWith('use')) {
  const platformStr = alfyInput.split('use')[1] && alfyInput.split('use')[1].trim()
  if (platformStr) {
    alfy.output(
      presetApis.filter((item) => {
        return item.arg?.includes(platformStr.toLowerCase()) || item.title.includes(platformStr)
      })
    )
  }
  else {
    alfy.output(presetApis)
  }
}
else if (alfyInput.startsWith('target')) {
  const targetStr = alfyInput.split('target')[1] && alfyInput.split('target')[1].trim()
  if (targetStr) {
    alfy.output(
      presetTargetLanguage.filter((item) => {
        return item.title?.toLowerCase()?.includes(targetStr.toLowerCase()) || item.subtitle?.includes(targetStr)
      })
    )
  }
  else {
    alfy.output(presetTargetLanguage)
  }
}
