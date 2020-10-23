class SitesController < ApplicationController
  def index
    @tweets = Tweet.all.order('id desc')

  end
end
