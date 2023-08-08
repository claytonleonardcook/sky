export type Input = {
  type: HTMLInputElement['type'];
  required: boolean;
  value: string | string[];
  checked?: string[];
};

const formData = (form: HTMLFormElement): Record<string, Input> => {
  const data: Record<string, Input> = {};
  const inputs = Array.from(form.querySelectorAll('input'));
  inputs.forEach((input) => {
    data[input.name] = {
      type: input.type,
      required: input.required,
      value: [input.value],
      checked: [],
    };
  });
  return data;
};

export default formData;
