import { Field } from 'formik'
import React, { Component } from 'react'

export default class BlogImageInputField extends Component {
  render() {
    return (
      <>
        <Field>
            {
                (fieldProps:any) => {
                    const{field, form} = fieldProps
                    const{vlaue} = field
                    const{setFieldValue} = form
                    return(
                        <>
                            <input type="file" />
                        </>
                    )
                }
            }
        </Field>
      </>
    )
  }
}
