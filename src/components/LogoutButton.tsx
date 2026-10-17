import { Button } from "react-bootstrap";
import { Form } from "react-router";

type LogoutButtonProps = {
  className?: string;
};

export default function LogoutButton({ className }: LogoutButtonProps) {
  return (
    <Form method="post" action="/logout" className={className}>
      <Button type="submit" className="btn-automaster-ghost w-100">
        Sair
      </Button>
    </Form>
  );
}
