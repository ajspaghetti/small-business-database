class AddressesController < ApplicationController
    
    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    
    def index
        addresses = Address.all
        render json: addresses, status: :ok
    end

    def show
        address = Address.find(params[:id])
        render json: address, status: :ok #, serializer: AddressZipSerializer
    end

    def create
        new_address = Address.create!(address_params)
        render json: new_address, status: :created
    end

    def update
        update_address = Address.find(params[:id]).update!(address_params)
        render json: update_address, status: :accepted
    end

    private

    def address_params
        params_permit(:line_one, :line_two, :zip_id)
    end

    def not_found
        render json: { error: "Address not found" }, status: :not_found
    end

end
