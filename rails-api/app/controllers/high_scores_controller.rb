class HighScoresController < ApplicationController
  def index
    scores = HighScore.top_ten
    render json: {
      status: 'SUCCESS',
      message: 'Loaded data',
      data: scores
      }, status: :ok
    # render json: words.to_json
  end


end
