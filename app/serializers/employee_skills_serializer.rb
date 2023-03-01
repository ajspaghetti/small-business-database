class EmployeeSkillsSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :suffix, :skill_name

  has_and_belongs_to_many :skills
end
