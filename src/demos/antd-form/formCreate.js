/**
 * 高阶组件formCreate: 扩展现有表单
 */

import React, { Component } from 'react';

export default function FormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }

        handleChange = e => {
            const { name, value } = e.target;
            this.setState({[name]: value});
        };

        getFieldDecorator = (field, option) => {
            this.options[field] = option;
            return InputComp =>
                React.cloneElement(InputComp, {
                    name: field,
                    value: this.state[field] || '',
                    onChange: this.handleChange // 控件change事件处理
                });
        };

        getFieldsValue = () => {
            return {...this.state};
        };

        getFieldValue = field => {
            return this.state[field];
        };

        validateFields = callback => {
            let errors = {};
            const state = {...this.state};
            for (let field in this.options) {
                if (state[field] === undefined) {
                    errors[field] = 'error';
                }
                console.log('item', field);
            }
            if (JSON.stringify(errors) === '{}') {
                // 没有错误信息
                callback(undefined, state);
            } else {
                // 有错误信息，返回
                callback(errors, state);
            }
        };

        render() {
            return (
                <div className="border">
                    <Comp
                        {...this.props}
                        getFieldDecorator={this.getFieldDecorator}
                        getFieldsValue={this.getFieldsValue}
                        getFieldValue={this.getFieldValue}
                        validateFields={this.validateFields}
                    />
                </div>
            );
        }
    };
}