import { FC, FormEvent } from "react";
import { Options } from "./Options";
import Input from "../core/Input";
import Select from "../core/Select";
import Button from "../core/Button";
import { useMenu } from "src/hooks/useMenu";
import classes from "./Form.module.css";

export const Form: FC = () => {
  const { menu, addMenu } = useMenu();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const parent = form.parent as HTMLSelectElement;
    const child = form.child as HTMLInputElement;

    if (!parent.value || !child.value.trim()) return;

    addMenu?.({ parentID: parent.value, name: child.value.trim() });

    form.reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Select
        label="Parent"
        name="parent"
        placeholder="e.g., Home Page"
        required
      >
        <Options options={menu} />
      </Select>
      <Input label="Child" name="child" placeholder="e.g., Page 1" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};
