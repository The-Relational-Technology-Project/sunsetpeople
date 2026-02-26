type TranslationSet = Record<string, string>;

export const translations: Record<"en" | "zh", TranslationSet> = {
  en: {
    // Navigation
    "nav.siteName": "outer sunset community",
    "nav.localGroups": "local groups",
    "nav.moreFun": "more fun",
    "nav.suggest": "suggest a group",
    "nav.contact": "contact",

    // Hero
    "hero.title": "oh hi there!",
    "hero.subtitle": "This is a neighborhood guide to help more of us find community",

    // Local Groups
    "groups.title": "local groups",
    "groups.subtitle": "A growing list of groups and ways to join",

    // Category names
    "cat.outdoors": "outdoors & movement",
    "cat.care": "care for people & place",
    "cat.making": "making & creativity",
    "cat.civic": "neighborhood & civic life",
    "cat.faith": "faith & spiritual life",
    "cat.food": "food & gathering",

    // Outdoors & movement
    "group.surfSpots.name": "Surf Spots",
    "group.surfSpots.desc": "Paddle out, be respectful, and say hi. Lots of kind neighborhood folks in the lineup.",
    "group.yogabeach.name": "Yogabeach",
    "group.yogabeach.desc": "Local studio with many types of classes, events, workshops, and groups.",
    "group.beachCleanUp.name": "Beach Clean Up Crews",
    "group.beachCleanUp.desc": "Check out Surfrider Foundation and look for friendly folks with orange vests and buckets!",
    "group.pickleball.name": "Pickleball at Sunset Courts",
    "group.pickleball.desc": "Take some intro classes at Goldman Center or Dink SF, then play any day at Larsen Playground's beginner courts. Folks are very friendly!",
    "group.runClub.name": "Sunset Dunes Run Club",
    "group.runClub.desc": "Sunset Dunes parkrun takes place every Saturday at 8:00am. Free weekly 5km run/jog/walk at your own pace. Everyone is welcome.",
    "group.walking.name": "Walking Groups",
    "group.walking.desc": "Flyers are usually posted near Black Bird on Irving and nd Andytown on Lawton.",
    "group.natureCircle.name": "Children's Nature Circle",
    "group.natureCircle.desc": "Regular time for families to gather outdoors. Connect with the more than human world through songs, stories, and hands-on experiences. Friday mornings, 10:00am-12:00pm, on the west lawn of Blue Boat playground.",

    // Care for people & place
    "group.mutualSupport.name": "SF Mutual Support",
    "group.mutualSupport.desc": "Neighbors helping neighbors. Many ways to give and receive support.",
    "group.farOutWest.name": "Far Out West Community Garden",
    "group.farOutWest.desc": "Community garden, outdoor film series, and neighbor coffee hangouts. On Judah St., between 43rd and 44th Ave.",
    "group.urbanForest.name": "Friends of the Urban Forest",
    "group.urbanForest.desc": "Tree planting and neighborhood greening.",
    "group.outerMamas.name": "Outer Mamas and Outer Dadas",
    "group.outerMamas.desc": "Group chats and gatherings for dads and moms in the Sunset and Richmond. Ask a member or share your WhatsApp number in the contact message and someone will add you!",
    "group.greenSunset.name": "Green Outer Sunset",
    "group.greenSunset.desc": "This group helps people rip up the concrete in their front yards to plant gardens and sidewalk trees. They'll support you every step of the way.",

    // Making & creativity
    "group.caseForMaking.name": "Case for Making Workshops",
    "group.caseForMaking.desc": "Hands-on craft and making workshops. Create and learn together.",
    "group.blackBird.name": "Black Bird Book Clubs and Workshops",
    "group.blackBird.desc": "Literary community at the local bookshop. Reading, discussing, connecting.",
    "group.outerVillage.name": "Outer Village",
    "group.outerVillage.desc": "Community space, classes, workshops, and events, with a focus on the parent community.",
    "group.thirdRealm.name": "Third Realm",
    "group.thirdRealm.desc": "Third space in the Inner Sunset for work, play, and community.",
    "group.sealevel.name": "Sealevel",
    "group.sealevel.desc": "On evenings and weekends, Sealevel transforms into a vibrant creative hub and welcoming community gathering space, where all are invited to come together, exchange ideas, share skills and resources, and express their creativity in an inclusive environment.",

    // Neighborhood & civic life
    "group.outerSunsetNeighbors.name": "Outer Sunset Neighbors",
    "group.outerSunsetNeighbors.desc": "A neighborhood nonprofit focused on safe streets, green spaces, and thriving local businesses.",
    "group.schoolPTAs.name": "School PTAs",
    "group.schoolPTAs.desc": "If you have kids in local schools, this is where parents gather and organize.",
    "group.lionsClub.name": "Lions Club – SF Parkside / Sunset",
    "group.lionsClub.desc": "Service club for community projects and fellowship.",
    "group.sunsetMercantile.name": "Sunset Mercantile",
    "group.sunsetMercantile.desc": "Local business collective. Supporting the shops that make the neighborhood and the local farmers market.",

    // Faith & spiritual life
    "group.sunsetChurch.name": "Sunset Church",
    "group.sunsetChurch.desc": "Community church in the heart of the neighborhood.",
    "group.uicc.name": "United Irish Cultural Center",
    "group.uicc.desc": "Cultural community with dance classes, events, and gatherings.",
    "group.stGabriels.name": "St. Gabriel's Church",
    "group.stGabriels.desc": "Catholic parish in our community.",
    "group.holyName.name": "Holy Name of Jesus Parish",
    "group.holyName.desc": "Neighborhood Catholic parish. Regular services and community events.",

    // Food & gathering
    "group.farmersMarket.name": "Outer Sunset Farmers' Market",
    "group.farmersMarket.desc": "Sunday mornings. The place to see and be seen while buying produce.",
    "group.woods.name": "Woods Outbound Community Nights",
    "group.woods.desc": "One of our local bars with regular community events.",

    // More Fun
    "moreFun.title": "more fun",
    "moreFun.description1": "Looking for events, pop-ups, and things happening this week?",
    "moreFun.description2": "We post what these groups and local venues are hosting at",
    "moreFun.siteName": "outersunset.today",
    "moreFun.button": "Visit outersunset.today",

    // Suggest Group Form
    "suggest.title": "know a group we should add?",
    "suggest.subtitle1": "This list is better when more people help shape it.",
    "suggest.subtitle2": "If you know a group, club, or recurring gathering in the Sunset, we would love to include it.",
    "suggest.nameLabel": "Your name",
    "suggest.namePlaceholder": "Jane",
    "suggest.emailLabel": "Your email",
    "suggest.emailPlaceholder": "jane@example.com",
    "suggest.groupNameLabel": "Group name",
    "suggest.groupNamePlaceholder": "Sunset Morning Run Club",
    "suggest.linkLabel": "Link (optional)",
    "suggest.linkPlaceholder": "https://...",
    "suggest.noteLabel": "Short note (optional)",
    "suggest.notePlaceholder": "Tell us a bit about this group — when they meet, what it's like to show up for the first time...",
    "suggest.captchaLabel": "Quick check: What is",
    "suggest.submitButton": "Send suggestion",
    "suggest.submitting": "Sending...",
    "suggest.successTitle": "Thank you!",
    "suggest.successDesc": "We'll review your suggestion and may add it to the list.",
    "suggest.errorTitle": "Something went wrong",
    "suggest.errorDesc": "Please try again later.",

    // Contact Section
    "contact.title": "say hi",
    "contact.subtitle1": "Questions, ideas, or just want to say hi?",
    "contact.subtitle2": "We would love to hear from you.",
    "contact.nameLabel": "Your name",
    "contact.namePlaceholder": "Jane",
    "contact.emailLabel": "Your email",
    "contact.emailPlaceholder": "jane@example.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "What's on your mind?",
    "contact.captchaLabel": "Quick check: What is",
    "contact.submitButton": "Send message",
    "contact.submitting": "Sending...",
    "contact.successTitle": "Message sent!",
    "contact.successDesc": "Thanks for reaching out. We'll get back to you soon.",
    "contact.errorTitle": "Something went wrong",
    "contact.errorDesc": "Please try again later.",

    // Footer
    "footer.siteName": "outer sunset community",
    "footer.tagline": "Made by neighbors, for neighbors.",
    "footer.subtitle": "A neighborhood guide to the Outer Sunset, San Francisco",
    "footer.botLink": "Are you a helpful bot?",

    // Landscape Footer - sibling sites
    "footer.cozyCorner": "Cozy Corner Neighbor Hub",
    "footer.cozyCornerQ": "Live near 48th and Irving?",
    "footer.fieldGuide": "Outer Sunset Field Guide",
    "footer.fieldGuideQ": "Exploring the neighborhood?",
    "footer.supplies": "Community Supplies",
    "footer.suppliesQ": "Want to share things with neighbors?",
    "footer.today": "Outer Sunset Today",
    "footer.todayQ": "Curious what's happening today?",
    "footer.neighborSites": "Neighborhood sites",

    // Credits Footer
    "footer.credits1": "Made by neighbors, with neighbors, for neighbors",
    "footer.creditsLink1": "relational tech",
    "footer.credits2": "for your neighborhood",
    "footer.creditsLink2": "Remix this",
  },

  zh: {
    // Navigation
    "nav.siteName": "外日落区社区",
    "nav.localGroups": "本地团体",
    "nav.moreFun": "更多活动",
    "nav.suggest": "推荐团体",
    "nav.contact": "联系我们",

    // Hero
    "hero.title": "你好呀！",
    "hero.subtitle": "这是一份社区指南，帮助我们找到更多归属感",

    // Local Groups
    "groups.title": "本地团体",
    "groups.subtitle": "不断更新的团体名单及加入方式",

    // Category names
    "cat.outdoors": "户外与运动",
    "cat.care": "关爱邻里与环境",
    "cat.making": "手工与创意",
    "cat.civic": "社区与公共事务",
    "cat.faith": "信仰与精神生活",
    "cat.food": "美食与聚会",

    // Outdoors & movement
    "group.surfSpots.name": "冲浪点",
    "group.surfSpots.desc": "划出去，友善对待他人，打个招呼。排队等浪的时候你会遇到很多友好的邻居。",
    "group.yogabeach.name": "Yogabeach 瑜伽工作室",
    "group.yogabeach.desc": "本地瑜伽工作室，提供各类课程、活动、工作坊和小组。",
    "group.beachCleanUp.name": "海滩清洁小组",
    "group.beachCleanUp.desc": "关注 Surfrider 基金会，留意穿橙色背心、拿桶的友好志愿者！",
    "group.pickleball.name": "日落区匹克球场",
    "group.pickleball.desc": "可以在 Goldman Center 或 Dink SF 上入门课，然后在 Larsen 游乐场的初学者球场随时打球。大家都很友好！",
    "group.runClub.name": "日落沙丘跑步俱乐部",
    "group.runClub.desc": "日落沙丘 parkrun 每周六早上 8 点举行。免费的每周 5 公里跑步/慢跑/步行，按自己的节奏来。欢迎所有人参加。",
    "group.walking.name": "步行小组",
    "group.walking.desc": "传单通常贴在 Irving 街的 Black Bird 书店和 Lawton 街的 Andytown 咖啡馆附近。",
    "group.natureCircle.name": "儿童自然圈",
    "group.natureCircle.desc": "家庭定期户外聚会时间。通过歌曲、故事和动手体验与自然世界建立联系。每周五上午 10:00-12:00，在 Blue Boat 游乐场的西草坪。",

    // Care for people & place
    "group.mutualSupport.name": "旧金山互助会",
    "group.mutualSupport.desc": "邻里互助。有很多付出和接受帮助的方式。",
    "group.farOutWest.name": "Far Out West 社区花园",
    "group.farOutWest.desc": "社区花园、户外电影放映和邻里咖啡聚会。位于 Judah 街，43 至 44 大道之间。",
    "group.urbanForest.name": "城市森林之友",
    "group.urbanForest.desc": "植树和社区绿化。",
    "group.outerMamas.name": "外区妈妈们和外区爸爸们",
    "group.outerMamas.desc": "日落区和列治文区的爸妈群聊和聚会。可以找成员加入，或在联系表单里留下 WhatsApp 号码，会有人把你加进去！",
    "group.greenSunset.name": "绿色外日落区",
    "group.greenSunset.desc": "这个团体帮助人们把前院的水泥地改造成花园和行道树。他们会全程支持你。",

    // Making & creativity
    "group.caseForMaking.name": "Case for Making 工作坊",
    "group.caseForMaking.desc": "手工制作工作坊。一起创作，一起学习。",
    "group.blackBird.name": "Black Bird 读书会和工作坊",
    "group.blackBird.desc": "本地书店的文学社区。阅读、讨论、建立联系。",
    "group.outerVillage.name": "Outer Village",
    "group.outerVillage.desc": "社区空间，提供课程、工作坊和活动，特别关注家长社区。",
    "group.thirdRealm.name": "Third Realm",
    "group.thirdRealm.desc": "内日落区的第三空间，用于工作、娱乐和社区活动。",
    "group.sealevel.name": "Sealevel",
    "group.sealevel.desc": "在傍晚和周末，Sealevel 变成一个充满活力的创意中心和温馨的社区聚会空间，欢迎所有人前来交流想法、分享技能和资源，在包容的环境中表达创意。",

    // Neighborhood & civic life
    "group.outerSunsetNeighbors.name": "外日落区邻里会",
    "group.outerSunsetNeighbors.desc": "一个专注于安全街道、绿色空间和繁荣本地商业的社区非营利组织。",
    "group.schoolPTAs.name": "学校家长会",
    "group.schoolPTAs.desc": "如果你的孩子在本地学校，这是家长们聚集和组织活动的地方。",
    "group.lionsClub.name": "狮子会 – 旧金山 Parkside / 日落区",
    "group.lionsClub.desc": "社区项目和联谊的服务俱乐部。",
    "group.sunsetMercantile.name": "Sunset Mercantile",
    "group.sunsetMercantile.desc": "本地商家联盟。支持那些让社区独具特色的商店和本地农贸市场。",

    // Faith & spiritual life
    "group.sunsetChurch.name": "日落区教堂",
    "group.sunsetChurch.desc": "社区中心的教堂。",
    "group.uicc.name": "爱尔兰文化中心",
    "group.uicc.desc": "文化社区，提供舞蹈课、活动和聚会。",
    "group.stGabriels.name": "圣加百利教堂",
    "group.stGabriels.desc": "我们社区的天主教堂。",
    "group.holyName.name": "耶稣圣名堂",
    "group.holyName.desc": "社区天主教堂。定期礼拜和社区活动。",

    // Food & gathering
    "group.farmersMarket.name": "外日落区农贸市场",
    "group.farmersMarket.desc": "每周日上午。一边买菜一边社交的好地方。",
    "group.woods.name": "Woods Outbound 社区之夜",
    "group.woods.desc": "我们本地的酒吧之一，定期举办社区活动。",

    // More Fun
    "moreFun.title": "更多活动",
    "moreFun.description1": "想找活动、快闪店和本周发生的事？",
    "moreFun.description2": "我们在以下网站发布这些团体和本地场所举办的活动：",
    "moreFun.siteName": "outersunset.today",
    "moreFun.button": "访问 outersunset.today",

    // Suggest Group Form
    "suggest.title": "知道一个我们应该加上的团体？",
    "suggest.subtitle1": "更多人参与，这份名单就会更好。",
    "suggest.subtitle2": "如果你知道日落区的团体、俱乐部或定期聚会，我们很乐意加进来。",
    "suggest.nameLabel": "你的名字",
    "suggest.namePlaceholder": "张三",
    "suggest.emailLabel": "你的邮箱",
    "suggest.emailPlaceholder": "jane@example.com",
    "suggest.groupNameLabel": "团体名称",
    "suggest.groupNamePlaceholder": "日落区晨跑俱乐部",
    "suggest.linkLabel": "链接（可选）",
    "suggest.linkPlaceholder": "https://...",
    "suggest.noteLabel": "简短说明（可选）",
    "suggest.notePlaceholder": "告诉我们一些关于这个团体的信息——他们什么时候聚会，第一次去是什么感觉……",
    "suggest.captchaLabel": "快速验证：",
    "suggest.submitButton": "发送推荐",
    "suggest.submitting": "发送中...",
    "suggest.successTitle": "谢谢！",
    "suggest.successDesc": "我们会审核你的推荐，可能会把它加入名单。",
    "suggest.errorTitle": "出了点问题",
    "suggest.errorDesc": "请稍后再试。",

    // Contact Section
    "contact.title": "打个招呼",
    "contact.subtitle1": "有问题、想法，或只是想打个招呼？",
    "contact.subtitle2": "我们很乐意收到你的来信。",
    "contact.nameLabel": "你的名字",
    "contact.namePlaceholder": "张三",
    "contact.emailLabel": "你的邮箱",
    "contact.emailPlaceholder": "jane@example.com",
    "contact.messageLabel": "留言",
    "contact.messagePlaceholder": "你在想什么？",
    "contact.captchaLabel": "快速验证：",
    "contact.submitButton": "发送消息",
    "contact.submitting": "发送中...",
    "contact.successTitle": "消息已发送！",
    "contact.successDesc": "感谢你的来信。我们会尽快回复。",
    "contact.errorTitle": "出了点问题",
    "contact.errorDesc": "请稍后再试。",

    // Footer
    "footer.siteName": "外日落区社区",
    "footer.tagline": "邻居做的，为邻居做的。",
    "footer.subtitle": "旧金山外日落区社区指南",
    "footer.botLink": "你是一个有用的机器人吗？",

    // Landscape Footer - sibling sites
    "footer.cozyCorner": "温馨角落邻里中心",
    "footer.cozyCornerQ": "住在第48大道和Irving街附近？",
    "footer.fieldGuide": "外日落区实地指南",
    "footer.fieldGuideQ": "想探索这个社区？",
    "footer.supplies": "社区物资",
    "footer.suppliesQ": "想和邻居分享东西？",
    "footer.today": "外日落区今日",
    "footer.todayQ": "好奇今天有什么活动？",
    "footer.neighborSites": "社区网站",

    // Credits Footer
    "footer.credits1": "由邻居制作，与邻居一起，为邻居服务",
    "footer.creditsLink1": "关系科技",
    "footer.credits2": "为你的社区",
    "footer.creditsLink2": "复制改造",
  },
};

// Mapping from English group name to translation key prefix
export const groupKeyMap: Record<string, string> = {
  "Surf Spots": "group.surfSpots",
  "Yogabeach": "group.yogabeach",
  "Beach Clean Up Crews": "group.beachCleanUp",
  "Pickleball at Sunset Courts": "group.pickleball",
  "Sunset Dunes Run Club": "group.runClub",
  "Walking Groups": "group.walking",
  "Children's Nature Circle": "group.natureCircle",
  "SF Mutual Support": "group.mutualSupport",
  "Far Out West Community Garden": "group.farOutWest",
  "Friends of the Urban Forest": "group.urbanForest",
  "Outer Mamas and Outer Dadas": "group.outerMamas",
  "Green Outer Sunset": "group.greenSunset",
  "Case for Making Workshops": "group.caseForMaking",
  "Black Bird Book Clubs and Workshops": "group.blackBird",
  "Outer Village": "group.outerVillage",
  "Third Realm": "group.thirdRealm",
  "Sealevel": "group.sealevel",
  "Outer Sunset Neighbors": "group.outerSunsetNeighbors",
  "School PTAs": "group.schoolPTAs",
  "Lions Club – SF Parkside / Sunset": "group.lionsClub",
  "Sunset Mercantile": "group.sunsetMercantile",
  "Sunset Church": "group.sunsetChurch",
  "United Irish Cultural Center": "group.uicc",
  "St. Gabriel's Church": "group.stGabriels",
  "Holy Name of Jesus Parish": "group.holyName",
  "Outer Sunset Farmers' Market": "group.farmersMarket",
  "Woods Outbound Community Nights": "group.woods",
};

// Mapping from English category name to translation key
export const categoryKeyMap: Record<string, string> = {
  "outdoors & movement": "cat.outdoors",
  "care for people & place": "cat.care",
  "making & creativity": "cat.making",
  "neighborhood & civic life": "cat.civic",
  "faith & spiritual life": "cat.faith",
  "food & gathering": "cat.food",
};
