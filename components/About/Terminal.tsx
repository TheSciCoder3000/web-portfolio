import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

function TerminalComponent() {
  return (
    <Terminal className="bg-black/25">
      <TypingAnimation>&gt; npm @john-juvi/background-check</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Computer Engineering Graduate
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ 4+ Years of programming
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Experience with ReactJS and NextJS development
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Firebase and Supabase Experience.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ OPENAI API Experience.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Responsive and Interactive Development.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Work Experience Found:</span>
        <span className="pl-2">- Upwork Freelancing</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Validation Successful!
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        You may now hire John Juvi De Villa
      </TypingAnimation>
    </Terminal>
  );
}

export default TerminalComponent;
