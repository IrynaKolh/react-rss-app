import { FormProps } from './../model/interfases';

describe('FormProps', () => {
  it('should have a callback function', () => {
    const props: FormProps = {
      onSubmit: (character) => console.log(character),
    };

    expect(props.onSubmit).toBeDefined();
    expect(typeof props.onSubmit).toBe('function');
  });
});
