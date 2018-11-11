import * as React from 'react';
import { Component } from "react";
import { Input, Form } from "antd";
const FormItem = Form.Item;
interface VwInputProps { 
    from?: object,
    required?: boolean,
 };
interface VwInputState { };
export class VwInput extends Component<VwInputProps, VwInputState> {
	constructor() {
		super();
    }
    
    renderFormControl(props) {
        const { form, required, message, formName, ...other } = props
        return <FormItem>
        {form.getFieldDecorator(formName, {
          rules: [{ required, message }],
        })(
          <Input {...other} />
        )}
      </FormItem>
    }

    renderControl(props) {
        const { ...other } = props
        return <Input {...other}/>
    }

	render() {
		const { from } = this.props;
        return <div>
            {
                from 
                    ? this.renderFormControl(this.props)
                    : this.renderControl(this.props)
            }
        </div>;	
	}

}
