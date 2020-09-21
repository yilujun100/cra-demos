/**
 * 表单组件设计与实现
 * 使用Form.create()的方式实现：
 * getFieldDecorator: 用于和表单进行双向绑定
 * getFieldsValue: 获取一组输入控件的值，如不传入参数，则获取全部组件的值
 * getFieldValue: 获取一个输入控件的值
 * validateFields: 校验并获取一组输入域的值与Error，若fieldNames参数为空，则校验全部组件
 *
 * 表单组件设计思路
 * 表单组件要求实现数据收集、校验、提交等特性，可通过高阶组件扩展
 * 高阶组件给表单组件传递一个input组件包装函数接管其输入事件并统一管理表单数据
 * 高阶组件给表单组件传递一个校验函数使其具备数据校验功能
 */
import React, { Component } from 'react';
import FormCreate from './formCreate';

// 校验规则
const nameRules = { required: true, message: 'please input user name' };
const passwordRules = { required: true, message: 'please input user password' };

export default FormCreate(
    class MyFormPage extends Component {
        submit = () => {
            const {getFieldsValue, getFieldValue, validateFields} = this.props;
            validateFields((err, values) => {
                if (err) {
                    console.log('err', err);
                } else {
                    console.log('success', values);
                }
            });
            // console.log('submit', getFieldsValue(), getFieldValue('name'));
        };

        render() {
            console.log('props', this.props);
            const {getFieldDecorator} = this.props;
            return (
                <div>
                    <h3>MyFormPage</h3>
                    {getFieldDecorator('name', {rules: [nameRules]})(
                        <input type="text" placeholder="please input user name" />
                    )}
                    {getFieldDecorator('password', {rules: [passwordRules]})(
                        <input type="password" placeholder="please input user password" />
                    )}
                    <button onClick={this.submit}>提交</button>
                </div>
            );
        }
    }
);