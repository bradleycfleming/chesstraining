import { createClient } from "@/utils/supabase/server";
import { Chess } from 'chess.js'



export default async function Page() {
  const supabase = await createClient();
  const { data: puzzle, error } = await supabase
    .from('randompuzzles')
    .select('*')
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching random puzzle:", error);
    return <pre>Error fetching puzzle</pre>;
  }

  let chess = new Chess(puzzle.FEN)
//   JSON.stringify(chess.(), null, 2)

  return <pre>{chess.ascii()}</pre>;
}
        