from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .api import ChatAPI

class ChatView(APIView):

    def get(self, request, *args, **kwargs):
        query = request.query_params.get('query', '')
        if query:
            response = ChatAPI().get_response(query)
            return Response({"response": response}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "query is required"}, status=status.HTTP_400_BAD_REQUEST)

