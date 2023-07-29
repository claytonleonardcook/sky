<script lang="ts">
  import { Form, TextInput, RadioGroup, RadioInput } from '@components';
</script>

<Form
  onSubmit={(data) => {
    data.forEach((key) => {
      console.log(key);
    });
  }}
>
  <TextInput name="name" placeholder="Name">Name</TextInput>
  <RadioGroup name="group1">
    <RadioInput placeholder="A" value="a" />
    <RadioInput placeholder="B" value="b" />
    <RadioInput placeholder="C" value="c" />
  </RadioGroup>
  <input type="submit" value="Submit" />
</Form>

<style lang="scss">
</style>
