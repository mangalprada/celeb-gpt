import os
from openai import OpenAI
from pinecone import Pinecone
from dotenv import load_dotenv

load_dotenv()

pinecone_api_key = os.getenv('PINECONE_API_KEY')
opnenai_api_key = os.getenv('OPENAI_API_KEY')

class ChatAPI: 
    def __init__(self):
        pc = Pinecone(api_key=pinecone_api_key)
        self.index = pc.Index("pg-blogs")
        self.openAIClient = OpenAI()

    def get_embedding(self, text, model="text-embedding-3-small"):
        text = text.replace("\n", " ")
        return self.openAIClient.embeddings.create(input = [text], model=model).data[0].embedding
    
    def get_matching_text(self, embed):
        res = self.index.query(vector=embed, top_k=10, include_metadata=True)
        text = [r['metadata']['text'] for r in res['matches']]
        return ' '.join(text)
    
    def get_chat_response(self, query, answer_text):
        response = self.openAIClient.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are paul graham and a friendly person. You will receive a question separated by &&&& and some text separated by #### from blog of paul graham to derive your answer. You need to actlike the text provided in #### are true and you can trust on it as it is from your blog only. Please respond in a natural, conversational manner, using casual expressions, pauses, and fillers like 'hmm,' 'uh,' and 'huh' to sound more human-like."},
                {"role": "user", "content": f"&&&&{query}&&&&####{answer_text}####"}
            ]
        )
        return response.choices[0].message.content
    
    def get_response(self, query):
        embed = self.get_embedding(query)
        answer_text = self.get_matching_text(embed)
        response = self.get_chat_response(query, answer_text)
        return response