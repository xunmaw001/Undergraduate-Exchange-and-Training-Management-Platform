package com.dao;

import com.entity.XuefenjiluEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.XuefenjiluView;

/**
 * 学分增加记录 Dao 接口
 *
 * @author 
 */
public interface XuefenjiluDao extends BaseMapper<XuefenjiluEntity> {

   List<XuefenjiluView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
