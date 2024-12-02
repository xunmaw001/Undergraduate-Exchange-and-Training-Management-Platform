package com.entity.view;

import org.apache.tools.ant.util.DateUtils;
import com.annotation.ColumnInfo;
import com.entity.KechengEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import com.utils.DateUtil;

/**
* 课程信息
* 后端返回视图实体辅助类
* （通常后端关联的表或者自定义的字段需要返回使用）
*/
@TableName("kecheng")
public class KechengView extends KechengEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	//当前表
	/**
	* 课程类型的值
	*/
	@ColumnInfo(comment="课程类型的字典表值",type="varchar(200)")
	private String kechengValue;

	//级联表 教师
		/**
		* 工号
		*/

		@ColumnInfo(comment="工号",type="varchar(200)")
		private String jiaoshiUuidNumber;
		/**
		* 教师姓名
		*/

		@ColumnInfo(comment="教师姓名",type="varchar(200)")
		private String jiaoshiName;
		/**
		* 头像
		*/

		@ColumnInfo(comment="头像",type="varchar(255)")
		private String jiaoshiPhoto;
		/**
		* 联系方式
		*/

		@ColumnInfo(comment="联系方式",type="varchar(200)")
		private String jiaoshiPhone;
		/**
		* 教师类型
		*/
		@ColumnInfo(comment="教师类型",type="int(11)")
		private Integer jiaoshiTypes;
			/**
			* 教师类型的值
			*/
			@ColumnInfo(comment="教师类型的字典表值",type="varchar(200)")
			private String jiaoshiValue;
		/**
		* 邮箱
		*/

		@ColumnInfo(comment="邮箱",type="varchar(200)")
		private String jiaoshiEmail;
		/**
		* 假删
		*/

		@ColumnInfo(comment="假删",type="int(11)")
		private Integer jiaoshiDelete;



	public KechengView() {

	}

	public KechengView(KechengEntity kechengEntity) {
		try {
			BeanUtils.copyProperties(this, kechengEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	//当前表的
	/**
	* 获取： 课程类型的值
	*/
	public String getKechengValue() {
		return kechengValue;
	}
	/**
	* 设置： 课程类型的值
	*/
	public void setKechengValue(String kechengValue) {
		this.kechengValue = kechengValue;
	}


	//级联表的get和set 教师

		/**
		* 获取： 工号
		*/
		public String getJiaoshiUuidNumber() {
			return jiaoshiUuidNumber;
		}
		/**
		* 设置： 工号
		*/
		public void setJiaoshiUuidNumber(String jiaoshiUuidNumber) {
			this.jiaoshiUuidNumber = jiaoshiUuidNumber;
		}

		/**
		* 获取： 教师姓名
		*/
		public String getJiaoshiName() {
			return jiaoshiName;
		}
		/**
		* 设置： 教师姓名
		*/
		public void setJiaoshiName(String jiaoshiName) {
			this.jiaoshiName = jiaoshiName;
		}

		/**
		* 获取： 头像
		*/
		public String getJiaoshiPhoto() {
			return jiaoshiPhoto;
		}
		/**
		* 设置： 头像
		*/
		public void setJiaoshiPhoto(String jiaoshiPhoto) {
			this.jiaoshiPhoto = jiaoshiPhoto;
		}

		/**
		* 获取： 联系方式
		*/
		public String getJiaoshiPhone() {
			return jiaoshiPhone;
		}
		/**
		* 设置： 联系方式
		*/
		public void setJiaoshiPhone(String jiaoshiPhone) {
			this.jiaoshiPhone = jiaoshiPhone;
		}
		/**
		* 获取： 教师类型
		*/
		public Integer getJiaoshiTypes() {
			return jiaoshiTypes;
		}
		/**
		* 设置： 教师类型
		*/
		public void setJiaoshiTypes(Integer jiaoshiTypes) {
			this.jiaoshiTypes = jiaoshiTypes;
		}


			/**
			* 获取： 教师类型的值
			*/
			public String getJiaoshiValue() {
				return jiaoshiValue;
			}
			/**
			* 设置： 教师类型的值
			*/
			public void setJiaoshiValue(String jiaoshiValue) {
				this.jiaoshiValue = jiaoshiValue;
			}

		/**
		* 获取： 邮箱
		*/
		public String getJiaoshiEmail() {
			return jiaoshiEmail;
		}
		/**
		* 设置： 邮箱
		*/
		public void setJiaoshiEmail(String jiaoshiEmail) {
			this.jiaoshiEmail = jiaoshiEmail;
		}

		/**
		* 获取： 假删
		*/
		public Integer getJiaoshiDelete() {
			return jiaoshiDelete;
		}
		/**
		* 设置： 假删
		*/
		public void setJiaoshiDelete(Integer jiaoshiDelete) {
			this.jiaoshiDelete = jiaoshiDelete;
		}


	@Override
	public String toString() {
		return "KechengView{" +
			", kechengValue=" + kechengValue +
			", jiaoshiUuidNumber=" + jiaoshiUuidNumber +
			", jiaoshiName=" + jiaoshiName +
			", jiaoshiPhoto=" + jiaoshiPhoto +
			", jiaoshiPhone=" + jiaoshiPhone +
			", jiaoshiEmail=" + jiaoshiEmail +
			", jiaoshiDelete=" + jiaoshiDelete +
			"} " + super.toString();
	}
}
