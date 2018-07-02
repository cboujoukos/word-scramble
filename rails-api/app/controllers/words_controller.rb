class WordsController < ApplicationController
  def index
    @words = Word.all
    render json: @words.to_json
  end

  def show
    @word = Word.find(params[:id])
    render json: @word.to_json
  end
end
