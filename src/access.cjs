'use strict';
// Seeded baseline: organization membership alone is too broad.
exports.canRead = (actor, repository) => Boolean(actor && actor.active === true && actor.organizationId === repository.organizationId);
