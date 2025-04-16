import pandas as pd
from supabase import create_client, Client

url = "https://rzthxoaawhileenyobpq.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dGh4b2Fhd2hpbGVlbnlvYnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NDMyMTQsImV4cCI6MjA2MDQxOTIxNH0.lmB_C8B07bGStpfNsMfwc9xMT6182lI-Uus8Dn-KeV4"  # use service key for insert permissions
supabase: Client = create_client(url, key)

df = pd.read_csv(r"C:\Users\brad1\Downloads\lichess_db_puzzle.csv")

df = df.fillna('')

print("hello world")

for row in df.to_dict(orient="records"):
    supabase.table("puzzles").insert(row).execute()