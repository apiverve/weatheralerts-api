# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_weatheralerts"
  spec.version       = "1.2.2"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "Weather Alerts API - Ruby Client"
  spec.description   = "Weather Alerts returns the severe weather warnings, watches and advisories in effect right now for any point or state in the United States, straight from the National Weather Service. Each alert names the event, how severe and urgent it is, the area covered, when it starts and ends, and what to do."
  spec.homepage      = "https://apiverve.com/marketplace/weatheralerts?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/weatheralerts-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/weatheralerts"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
