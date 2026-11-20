'use strict';
// Ownership and grants never bypass active membership in the owning organization.
exports.canRead = (actor, repository) => Boolean(
  actor && actor.active === true &&
  actor.organizationId === repository.organizationId &&
  (actor.id === repository.ownerId ||
    (Array.isArray(actor.repositoryIds) && actor.repositoryIds.includes(repository.id)))
);
