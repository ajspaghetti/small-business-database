class ProjectsController < ApplicationController

    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def show
        project = Project.find(params[:id])
        render json: project, status: :ok
    end

    def create
        new_project = Project.create!(project_params)
        render json: new_project, status: :created
    end

    def update
        update_project = Project.find(params[:id]).update!(project_params)
        render json: update_project, status: :accepted
    end

    def destroy
        delete_project = Project.find(params[:id]).destroy!
        render json: delete_project
        head :no_content
    end

    private

    def project_params
        params_permit(:project_name, :project_desc, :project_notes, :address_id, :user_id)
    end

    def not_found
        render json: { error: "Project not found"}, status: :not_found
    end

end
