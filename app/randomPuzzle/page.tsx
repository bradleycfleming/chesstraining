import { createClient } from "@/utils/supabase/server";
import { Chess } from 'chess.js'
import Chessboard from "@/components/chessboard/chessboard";



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

  // let chess = new Chess(puzzle.FEN)
//   JSON.stringify(chess.(), null, 2)

  return (
    <div className="flex flex-col">
      <Chessboard fen={puzzle.FEN} />
    </div>
  );
}
        