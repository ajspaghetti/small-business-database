class ZipController < ApplicationController

    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        zips = Zip.all
        render json: zips, status: :ok
    end

    def show
        zip = Zip.find(params[:id])
        render json: zip, status: :ok, serializer: ZipAddressesSerializer
    end

    private

    def not_found
        render json: { error: "Zip Code not found"}, status: :not_found
    end

end
