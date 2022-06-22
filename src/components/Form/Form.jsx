import {
    Form,
    SeachInput,
    SubmitBtn,
    SearchIcon,
  } from './Form.styles';


export const FormSection = ({inputValue, handleChange}) => {
    return (
      <Form>
        <SeachInput
          value={inputValue}
          onChange={handleChange}
          placeholder='Search product'
          required
        />
        <SubmitBtn type='submit'><SearchIcon/></SubmitBtn>
      </Form>
    );
}