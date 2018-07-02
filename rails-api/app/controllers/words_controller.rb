class WordsController < ApplicationController
  def index
    words = Word.all
    render json: {status: 'SUCCESS', message: 'Loaded all words', data: words}, status: :ok
    # render json: words.to_json
  end

  def show
    word = Word.find(params[:id])
    # render json: word.to_json
    render json: {status: 'SUCCESS', message: 'Loaded word', data: word}, status: :ok
  end
end
