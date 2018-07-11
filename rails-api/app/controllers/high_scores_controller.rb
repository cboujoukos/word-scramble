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

  def create
    HighScore.create(score_params)
  end

  private
  def score_params
    params.require(:high_score).permit(:name, :score)
  end

end
