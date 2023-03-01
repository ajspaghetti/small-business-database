class AddressController < ApplicationController
    get "/addresses" do
        addresses = Address.all
        addresses.to_json(include: [:zip])
    end

    get "/addresses/:id" do
        address = Address.find(params[:id])
        address.to_json(include: [:zip])
    end

    post "/addresses" do 
        new_address = Address.create!(
            line_one: params[:line_one],
            line_two: params[:line_two],
            zip_id: params[:zip_id]
        )
        new_address.to_json(include: [:zip])
    end

    patch "/addresses/:id" do
        address = Address.find(params[:id])
        address.update(
            line_one: params[:line_one],
            line_two: params[:line_two],
            zip_id: params[:zip_id]
        )
        address.to_json(include: [:zip])
    end

end
