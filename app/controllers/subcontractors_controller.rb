class SubcontractorsController < ApplicationController

    # skip_before_action :authorize

    def index
        subcontractors = Subcontractor.all
        # byebug
        render json: subcontractors, status: :ok
    end

    def show
        subcontractor = Subcontractor.find(params[:id])
        # byebug
        render json: subcontractor, status: :ok
    end

    def create
        new_sub = Subcontractor.create!(sub_params)
        render json: new_sub, status: :created
    end

    def update
        update_sub = Subcontractor.find(params[:id]).update!
        render json: update_sub, status: :accepted
    end

    def destroy
        delete_sub = Subcontractor.find(params[:id]).destroy!
        render json: delete_sub
        head :no_content
    end

    private

    def sub_params
        params_permit(:company_legal_name, :company_dba, :address_id, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :sub_tax_number, :skill_id, :active?, :sub_notes)
    end
end
