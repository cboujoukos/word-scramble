class WordsController < ApplicationController
  def index
    if params[:difficulty]
      word = Word.random_from(params[:difficulty])
    else
      words = Word.all
    end
    render json: {status: 'SUCCESS', message: 'Loaded data', data: word || words}, status: :ok
    # render json: words.to_json
  end

  def show
    word = Word.find(params[:id])
    # render json: word.to_json
    render json: {status: 'SUCCESS', message: 'Loaded data', data: word}, status: :ok
  end


end
