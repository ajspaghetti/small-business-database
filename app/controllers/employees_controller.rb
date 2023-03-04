class EmployeesController < ApplicationController

    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        employees = Employee.all
        render json: employees, status: :ok
    end

    def show
        employee = Employee.find(params[:id])
        render json: employee, status: :ok
    end

    def create
        new_employee = Employee.create!(employee_params)
        render json: new_employee, status: :created
    end

    def update
        update_employee = Employee.find(params[:id]).update!(employee_params)
        render json: update_employee, status: :accepted
    end

    def destroy
        delete_employee = Employee.find(params[:id]).destroy!
        render json: delete_employee
        head :no_content
    end

    private

    def employee_params
        params_permit(:first_name, :middle_name, :last_name, :suffix, :gender, :emp_phone, :emp_email, :tax_number, :job_title, :skill_id, :start_date, :hourly_or_salary, :hourly_rate, :annual_salary, :pto_policy, :active?, :emp_notes)
    end

    def not_found
        render json: { error: "Employee not found"}, status: :not_found
    end

end
