const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
   //              "child":[
   //                  {
   //                      "buttons":[
   //                          "查看",
   //                          "新增",
   //                          "修改",
   //                          "删除"
   //                      ],
   //                      "menu":"管理员管理",
   //                      "menuJump":"列表",
   //                      "tableName":"users"
   //                  }
   //              ],
   //              "menu":"管理员管理"
   //          }
			// ,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"课程信息管理",
			            "menuJump":"列表",
			            "tableName":"kecheng"
			        }
			    ],
			    "menu":"课程信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "审核",
			                "删除"
			            ],
			            "menu":"活动报名管理",
			            "menuJump":"列表",
			            "tableName":"huoodngbaoming"
			        }
			    ],
			    "menu":"活动报名管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生成绩管理",
                        "menuJump":"列表",
                        "tableName":"chengji"
                    }
                ],
                "menu":"学生成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"学生请假管理",
                        "menuJump":"列表",
                        "tableName":"qingjia"
                    }
                ],
                "menu":"学生请假管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"选课信息管理",
                        "menuJump":"列表",
                        "tableName":"xuanke"
                    }
                ],
                "menu":"选课信息管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"交流申请管理",
			            "menuJump":"列表",
			            "tableName":"jiaoliushenqing"
			        }
			    ],
			    "menu":"交流申请管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"学分增加记录管理",
			            "menuJump":"列表",
			            "tableName":"xuefenjilu"
			        }
			    ],
			    "menu":"学分增加记录管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"院校展示管理",
                        "menuJump":"列表",
                        "tableName":"yuanxiao"
                    }
                ],
                "menu":"院校展示管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公共资料管理",
                        "menuJump":"列表",
                        "tableName":"ziliao"
                    }
                ],
                "menu":"公共资料管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"成绩类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryChengji"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"帖子类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryForum"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"活动类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryHuoodngbaoming"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"教师类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiaoshi"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"课程类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryKecheng"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"请假类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryQingjia"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"资料类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryZiliao"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"课程信息管理",
			            "menuJump":"列表",
			            "tableName":"kecheng"
			        }
			    ],
			    "menu":"课程信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"活动报名管理",
			            "menuJump":"列表",
			            "tableName":"huoodngbaoming"
			        }
			    ],
			    "menu":"活动报名管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"学生成绩管理",
	                    "menuJump":"列表",
	                    "tableName":"chengji"
	                }
	            ],
	            "menu":"学生成绩管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核"
	                    ],
	                    "menu":"学生请假管理",
	                    "menuJump":"列表",
	                    "tableName":"qingjia"
	                }
	            ],
	            "menu":"学生请假管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"选课信息管理",
	                    "menuJump":"列表",
	                    "tableName":"xuanke"
	                }
	            ],
	            "menu":"选课信息管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "审核"
			            ],
			            "menu":"交流申请管理",
			            "menuJump":"列表",
			            "tableName":"jiaoliushenqing"
			        }
			    ],
			    "menu":"交流申请管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
	                        "新增",
	                        "删除"
			            ],
			            "menu":"学分增加记录管理",
			            "menuJump":"列表",
			            "tableName":"xuefenjilu"
			        }
			    ],
			    "menu":"学分增加记录管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"院校展示管理",
	                    "menuJump":"列表",
	                    "tableName":"yuanxiao"
	                }
	            ],
	            "menu":"院校展示管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公共资料管理",
	                    "menuJump":"列表",
	                    "tableName":"ziliao"
	                }
	            ],
	            "menu":"公共资料管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
]
    }
}
export default menu;
