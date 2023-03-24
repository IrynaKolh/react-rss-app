import { FormProps } from './../model/interfases';

describe('FormProps', () => {
  it('should have a callback function', () => {
    const props: FormProps = {
      callback: (character) => console.log(character),
    };

    expect(props.callback).toBeDefined();
    expect(typeof props.callback).toBe('function');
  });
});
