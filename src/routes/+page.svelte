<script lang="ts">
  import { Form, Input, InputGroup } from '@components';
</script>

<main class="main">
  <Form
    className="form1"
    onSubmit={(data) => {
      // console.log(Ob);
    }}
  >
    <Input type="text" placeholder="First Name" />
    <Input type="text" placeholder="Last Name" />
    <InputGroup name="gender" component="fieldset">
      <Input type="radio" placeholder="Male" value="male" />
      <Input type="radio" placeholder="Female" value="female" />
      <Input type="radio" placeholder="Non-Binary" value="nonbinary" />
    </InputGroup>
    <InputGroup name="major" component="fieldset">
      <Input type="checkbox" placeholder="Computer Science" value="cs" />
      <Input type="checkbox" placeholder="Computer Informational Systems" value="csis" />
      <Input type="checkbox" placeholder="Math" value="math" />
    </InputGroup>
    <button type="submit">Submit</button>
  </Form>
</main>

<style>
  .main > :global(.form1) {
    display: flex;
    flex-direction: column;
  }
</style>
