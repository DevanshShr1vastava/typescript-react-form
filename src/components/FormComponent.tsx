import { useRef, useState } from "react";
import { Container,Form,Button,Row,Col,Card } from "react-bootstrap";


const FormComponent = () => {
    interface IFormData{
        first_name : string;
        last_name : string;
        age : number;
        gender : string;
        skill : string;
        email : string;
        phoneNo : number;
        address : string;
    }
    
    const [formData,setFormData] = useState<IFormData>({
        first_name : "",
        last_name : "",
        age : 0,
        gender : "",
        skill : "",
        email : "",
        phoneNo : 0,
        address : "",
    });
    const formRef = useRef<HTMLFormElement>(null);

    interface FormElements extends HTMLFormControlsCollection{
        first_name : HTMLInputElement,
        last_name : HTMLInputElement,
        age : HTMLInputElement,
        gender : HTMLInputElement,
        skill : HTMLInputElement,
        email : HTMLInputElement,
        phoneNo : HTMLInputElement,
        address : HTMLInputElement,
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        const form = formRef.current as HTMLFormElement;
        const formElements = form.elements as FormElements;
        const updatedData : IFormData = {
            first_name : formElements.first_name.value,
            last_name : formElements.last_name.value,
            age : Number(formElements.age.value),
            gender : formElements.gender.value,
            skill : formElements.skill.value,
            email : formElements.email.value,
            phoneNo : Number(formElements.phoneNo.value),
            address : formElements.address.value
        }

        setFormData(updatedData);
        form.reset();
    }

    const skillOptions:string[] = ['Public Speaking','Design','Arts & Craft'];

  return (<>
  <Container>
    <Row>
        <Col className='md-6'>
            <Form method="POST" ref={formRef} id='userForm' onSubmit={handleSubmit}>
                <Row>
                    <Col className="md-6">
                        <Form.Group className="mb-3" controlId = "formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name='first_name' type='text' placeholder = 'enter first name' />
                        </Form.Group>
                    </Col>
                    <Col className="md-6">
                        <Form.Group className="mb-3" controlId = "formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name='last_name' type='text' placeholder = 'enter last name' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="md-6">
                        <Form.Group className='mb-3' controlId = 'formAgeInput'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control name='age' type='number' placeholder = 'enter age' />
                        </Form.Group>
                    </Col>
                    <Col className="md-6">
                        <Form.Group className='mb-3' controlId = 'formGenderInput'>
                            <Form.Label>Gender</Form.Label>
                            <Form.Check 
                                type='radio'
                                id='radioMale'
                                label='Male'
                                name='gender'
                                value='Male'
                            />
                            <Form.Check 
                                type='radio'
                                id='radioFemale'
                                label='Female'
                                name='gender'
                                value='Female'
                            />
                            <Form.Check 
                                type='radio'
                                id='radioOther'
                                label='Other'
                                name='gender'
                                value='Other'
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='formSkillInput'>
                            <Form.Label>Skill</Form.Label>
                            <Form.Select name='skill'>
                                <option value="">Select Skill</option>
                            {skillOptions.map((skill,index)=>(
                                    <option key={index} value={skill}>{skill}</option>
                            ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='md-6'>
                        <Form.Group className='mb-3' controlId='formEmailInput'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control name='email' type='email' placeholder="Enter Email Address" />
                        </Form.Group>
                    </Col>
                    <Col className='md-6'>
                        <Form.Group className='mb-3' controlId='formPhoneInput'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name='phoneNo' type='text' placeholder='Enter phone number' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='formAddressInput'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control name='address' as='textarea' />
                        </Form.Group>
                    </Col>
                </Row>
           
                <Row>
                    <Col>
                        <Button variant="secondary" type='submit' id='update-form-data-button'>Submit</Button>
                    </Col>
                </Row>
                
            </Form>
        </Col>
        <Col className='md-6'>
            <Card>
                <Card.Header>
                    Form Data Output
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col className='mb-3'>
                            <strong>First Name : </strong> {formData.first_name}
                        </Col>
                        <Col className='mb-3'>
                            <strong>Last Name : </strong> {formData.last_name}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-3'>
                            <strong>Age : </strong> {formData.age}
                        </Col>
                        <Col className='mb-3'>
                            <strong>Gender : </strong> {formData.gender}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Skill : </strong> {formData.skill}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-3'>
                            <strong>Email : </strong> {formData.email}
                        </Col>
                        <Col className='mb-3'>
                            <strong>Phone No. : </strong> {formData.phoneNo}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Address : </strong> {formData.address}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  </Container>
  </>);
};






export default FormComponent;
