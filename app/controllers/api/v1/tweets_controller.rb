class Api::V1::TweetsController < Api::V1::BasesController
  before_action :set_tweet, only: [:show, :edit, :update, :destroy]
  protect_from_forgery except: [:destroy]
  respond_to :json

  def index
    @tweets = Tweet.all.order('id desc')
  end

  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to :show
    else
      render :new
    end
  end

  def destroy
    return false unless current_user = @tweet.user
    respond_with @tweet.destroy
  end

  def edit
  end

  def update
  end
  
  def show
  end

  private
  def tweet_params
    params.require(:tweet).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end
end
