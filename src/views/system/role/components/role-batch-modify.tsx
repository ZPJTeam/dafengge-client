import { RoleBatchModify } from '@/types/role';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { FormInstance } from 'antd/es/form';
import React, { useMemo } from 'react';

interface RoleBatchModifyProps {
  isRoleBatchModifyModalVisible: boolean;
  onRoleBatchModifyCancel: () => void;
  onRoleBatchModifyFinish: () => void;
  isRoleBatchModifyLoading: boolean;
  roleBatchModifyForm: FormInstance<RoleBatchModify>;
}

const roleBatchModifyFormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const RoleBatchModifyComponent: React.FC<RoleBatchModifyProps> = ({
  isRoleBatchModifyModalVisible,
  onRoleBatchModifyCancel,
  onRoleBatchModifyFinish,
  isRoleBatchModifyLoading,
  roleBatchModifyForm,
}) => {
  const footerButtons = useMemo(
    () => [
      <Button key="cancel" onClick={onRoleBatchModifyCancel}>
        取消
      </Button>,
      <Button key="submit" type="primary" loading={isRoleBatchModifyLoading} onClick={onRoleBatchModifyFinish}>
        确定
      </Button>,
    ],
    [isRoleBatchModifyLoading, onRoleBatchModifyCancel],
  );

  return (
    <Modal
      title="角色信息编辑"
      open={isRoleBatchModifyModalVisible}
      onCancel={onRoleBatchModifyCancel}
      footer={footerButtons}
      destroyOnClose
    >
        <Form
          {... roleBatchModifyFormItemLayout}
          form={ roleBatchModifyForm}
          name="roleBatchModify"
          onFinish={onRoleBatchModifyFinish}
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-0 gap-x-2 pt-4"
        >
          <Form.Item name="name" label="角色名称" rules={[{ required: false, message: '请输入' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="code" label="角色权限字符串" rules={[{ required: false, message: '请输入' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="sort" label="显示顺序" rules={[{ required: false, message: '请输入' }]}>
            <Input type="number" placeholder="请输入" />
          </Form.Item>
          <Form.Item name="data_scope" label="数据范围" rules={[{ required: false, message: '请输入' }]}>
            <Input type="number" placeholder="请输入" />
          </Form.Item>
          <Form.Item name="data_scope_dept_ids" label="数据范围" rules={[{ required: false, message: '请输入' }]}>
            <Input placeholder="请输入" />
            
          </Form.Item>
          <Form.Item name="status" label="角色状态" rules={[{ required: false, message: '请输入' }]}>
            <Select
              allowClear
              placeholder="请选择"
              optionFilterProp="label"
              defaultValue={"1"}
              onChange={() => {} }
              options={[
                {
                  value: '1',
                  label: '正常',
                },
                {
                  value: '0',
                  label: '停用',
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="comment" label="备注" rules={[{ required: false, message: '请输入' }]}>
            <Input placeholder="请输入" />
            
          </Form.Item>
        </Form>
    </Modal>
  );
};

export default RoleBatchModifyComponent;