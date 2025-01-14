import { Button } from "@/src/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={() => setShowAlert(!showAlert)}>666</Button>

      {showAlert ? (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
}
