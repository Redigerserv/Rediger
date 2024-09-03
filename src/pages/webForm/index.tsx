import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface FormValues {
    mobileOrEmail: string;
    membershipNumber: string;
    firmRegistrationNumber: string;
    profession: string;
    officeAddress: string;
    pinCode: string;
    email: string;
    mobileNumber: string;
    areaOfExpertise: string[];
    taxationServices: string[];
    accountingServices: string[];
    corporateCompliance: string[];
    industrySpecificRegistrations: string[];
    otherRegistrations: string[];
    doneTrademark: string;
    registeredValuer: string;
    valuerArea?: string;
}

// const validationSchema = Yup.object({
//     mobileOrEmail: Yup.string().required('Mobile or Email is required'),
//     membershipNumber: Yup.string().required('Membership Number is required'),
//     firmRegistrationNumber: Yup.string().required('Firm Registration Number is required'),
//     profession: Yup.string().required('Profession is required'),
//     officeAddress: Yup.string().required('Office address is required'),
//     pinCode: Yup.string().required('PIN code is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     mobileNumber: Yup.string().required('Mobile number is required'),
//     areaOfExpertise: Yup.array().min(1, 'Select at least one area of expertise'),
//     doneTrademark: Yup.string().required('This field is required'),
//     registeredValuer: Yup.string().required('This field is required'),
//     valuerArea: Yup.string().when('registeredValuer', (registeredValuer: any, schema) => {
//         return registeredValuer === 'Yes'
//             ? schema.required('Please specify the area')
//             : schema;
//     }),
//     // valuerArea: Yup.string().when('registeredValuer', {
//     // //   is: 'Yes',
//     // //   then: Yup.string().required('Please specify the area'),

//     //   is: (val: string) => val === 'Yes',
//     //   then: Yup.string().required('Please specify the area'),
//     //   otherwise: Yup.string(),
//     // }),
// });

const validationSchema = Yup.object({
    mobileOrEmail: Yup.string(),
    membershipNumber: Yup.string(),
    firmRegistrationNumber: Yup.string(),
    profession: Yup.string(),
    officeAddress: Yup.string().required('Office address is required'),
    pinCode: Yup.string().required('PIN code is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: Yup.string().required('Mobile number is required'),
    areaOfExpertise: Yup.array(),
    doneTrademark: Yup.string(),
    registeredValuer: Yup.string(),
    valuerArea: Yup.string().when('registeredValuer', (registeredValuer: any, schema) => {
        return registeredValuer === 'Yes'
            ? schema.required('Please specify the area')
            : schema;
    }),
    // valuerArea: Yup.string().when('registeredValuer', {s
    // //   is: 'Yes',
    // //   then: Yup.string().required('Please specify the area'),

    //   is: (val: string) => val === 'Yes',
    //   then: Yup.string().required('Please specify the area'),
    //   otherwise: Yup.string(),
    // }),
});

const WebForm: React.FC = () => {

    const initialValues: FormValues = {
        mobileOrEmail: '',
        membershipNumber: '',
        firmRegistrationNumber: '',
        profession: '',
        officeAddress: '',
        pinCode: '',
        email: '',
        mobileNumber: '',
        areaOfExpertise: [],
        taxationServices: [],
        accountingServices: [],
        corporateCompliance: [],
        industrySpecificRegistrations: [],
        otherRegistrations: [],
        doneTrademark: '',
        registeredValuer: '',
        valuerArea: '',
    };

    const handleSubmit = (values: FormValues) => {
        console.log('Form values:', values);
        // Handle form submission logic here
    };

    return (
        <>
            <div className="mt-160 mb-40">
                <div className="webform" style={{ borderTop: "1px solid #d5d0d0" }}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ values, handleChange }) => (
                            <Form className='formContainer'>
                                <div className='formGroup'>
                                    <label className='formLabel'>Sign up with mobile or email ID to register</label>
                                    <Field className="formInput" name="mobileOrEmail" type="text" />
                                    {/* <ErrorMessage className='formErrorMessage' name="mobileOrEmail" component="div" /> */}
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Enter membership number</label>
                                    <Field className="formInput" name="membershipNumber" type="text" />
                                    {/* <ErrorMessage className='formErrorMessage' name="membershipNumber" component="div" /> */}
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Firm Registration Number</label>
                                    <Field className="formInput" name="firmRegistrationNumber" type="text" />
                                    {/* <ErrorMessage className='formErrorMessage' name="firmRegistrationNumber" component="div" /> */}
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Profession: CA/CS/CMA/LLB</label>
                                    <Field className="formInput" name="profession" as="select">
                                        <option value="">Select Profession</option>
                                        <option value="CA">CA</option>
                                        <option value="CS">CS</option>
                                        <option value="CMA">CMA</option>
                                        <option value="LLB">LLB</option>
                                    </Field>
                                    {/* <ErrorMessage className='formErrorMessage' name="profession" component="div" /> */}
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Office address</label>
                                    <Field className="formInput" name="officeAddress" type="text" />
                                    <ErrorMessage className='formErrorMessage' name="officeAddress" component="div" />
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>PIN code*</label>
                                    <Field className="formInput" name="pinCode" type="text" />
                                    <ErrorMessage className='formErrorMessage' name="pinCode" component="div" />
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Email address*</label>
                                    <Field className="formInput" name="email" type="email" placeholder="Email Address" />
                                    <ErrorMessage className='formErrorMessage' name="email" component="div" />
                                </div>
                                <div className='formGroup'>
                                    <label className='formLabel'>Mobile number*</label>
                                    <Field className="formInput" name="mobileNumber" type="text" placeholder="Mobile Number" />
                                    <ErrorMessage className='formErrorMessage' name="mobileNumber" component="div" />
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Area of Expertise - Please select</label>
                                    <Field className="formInput" as="select" name="areaOfExpertise" multiple>
                                        <option value="Taxation Services">Taxation Services</option>
                                        <option value="Accounting Services">Accounting Services</option>
                                        <option value="Corporate Compliance and Registrations">Corporate Compliance and Registrations</option>
                                        <option value="Industry-Specific Registrations">Industry-Specific Registrations</option>
                                        <option value="Other Registrations">Other Registrations</option>
                                    </Field>
                                    {/* <ErrorMessage className='formErrorMessage' name="areaOfExpertise" component="div" /> */}
                                </div>

                                {/* Additional Fields for Expertise Areas */}
                                <div className='checkboxGroup'>
                                    <label className='formLabel'>Taxation Services</label>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="taxationServices" value="Tax Planning" /> Tax Planning
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="taxationServices" value="Tax Returns & GST Returns" /> Tax Returns & GST Returns and other Returns
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="taxationServices" value="Tax Advisory" /> Tax Advisory
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="taxationServices" value="Representation" /> Representation before tax authorities in case of disputes or audits
                                    </div>
                                </div>

                                <div className='checkboxGroup'>
                                    <label className='formLabel'>Accounting Services</label>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="accountingServices" value="Bookkeeping" /> Bookkeeping
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="accountingServices" value="Preparation of balance sheets" /> Preparation of balance sheets, profit and loss statements, and cash flow statements
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="accountingServices" value="Management Reporting" /> Management Reporting to assist in decision-making (MIS)
                                    </div>
                                </div>

                                <div className='checkboxGroup'>
                                    <label className='formLabel'>Corporate Compliance and Registrations</label>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="Company Law Compliance" /> Company Law Compliance
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="Business Licenses and Permits" /> Business Licenses and Permits
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="Company Registration" /> Company Registration
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="ROC Filings" /> ROC Filings
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="Change of Name and Registered Office" /> Change of Name and Registered Office
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="Shareholder Registrations" /> Shareholder Registrations
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="corporateCompliance" value="DIN Registration" /> Director Identification Number (DIN) Registration
                                    </div>
                                </div>

                                <div className='checkboxGroup'>
                                    <label className='formLabel'>Industry-Specific Registrations</label>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="industrySpecificRegistrations" value="Factory License" /> Factory License
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="industrySpecificRegistrations" value="Trade License" /> Trade License
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="industrySpecificRegistrations" value="FSSAI License" /> Food Safety and Standards Authority of India (FSSAI) License
                                    </div>
                                </div>

                                <div className='checkboxGroup'>
                                    <label className='formLabel'>Other Registrations</label>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="otherRegistrations" value="DSC" /> Digital Signature Certificate (DSC)
                                    </div>
                                    <div className='checkboxLabel'>
                                        <Field className="checkboxInput" type="checkbox" name="otherRegistrations" value="IEC" /> Import Export Code (IEC)
                                    </div>
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Are you done Trademark/Patent/Copyright Registrations?</label>
                                    <Field className="formInput" name="doneTrademark" as="select">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Field>
                                    {/* <ErrorMessage className='formErrorMessage' name="doneTrademark" component="div" /> */}
                                </div>

                                <div className='formGroup'>
                                    <label className='formLabel'>Are you a Registered Valuer?</label>
                                    <Field className="formInput" name="registeredValuer" as="select" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Field>
                                    {/* <ErrorMessage className='formErrorMessage' name="registeredValuer" component="div" /> */}
                                </div>

                                {values.registeredValuer === 'Yes' && (
                                    <div>
                                        <label className='formLabel'>If Yes, Please Specify Area</label>
                                        <Field className="formInput" name="valuerArea" type="text" />
                                        {/* <ErrorMessage className='formErrorMessage' name="valuerArea" component="div" /> */}
                                    </div>
                                )}
                                <div className="submitBtn" style={{textAlign:"end"}}>
                                    <button type="submit" className='btn btn-success btn-sm' >Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default WebForm;