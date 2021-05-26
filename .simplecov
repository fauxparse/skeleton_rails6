require 'simplecov_json_formatter'

SimpleCov.start 'rails' do
  coverage_dir 'coverage/rails'

  formatter SimpleCov::Formatter::MultiFormatter.new([
    SimpleCov::Formatter::JSONFormatter,
    SimpleCov::Formatter::HTMLFormatter,
  ])
end
