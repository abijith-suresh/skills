# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Renamed `plan-a-feature` skill to `create-a-plan`
- Renamed `auto-commit` skill to `create-a-commit`
- Removed `metadata` (author, version) from all skills — optional per spec, adds no value for consumers

### Added

- `auto-commit` skill: Create small, conventional commits with one clear intent each
- `create-a-plan` skill: Create a plan for new features or project changes before writing code, producing a settled PLAN.md
- `plan-to-issues` skill: Convert a settled PLAN.md into GitHub issues with parent-child hierarchy
