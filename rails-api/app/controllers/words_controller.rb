class WordsController < ApplicationController
  def index
    @words = Word.all
    render json: @words.to_json
  end
end
