/**
 * @module timed
 * @submodule timed-models
 * @public
 */
import Model, { attr, belongsTo } from "@ember-data/model";

/**
 * The customer assignee model
 *
 * @class CustomerAssignee
 * @extends DS.Model
 * @public
 */
export default Model.extend({
  /**
   * The customer
   *
   * @property customer
   * @type {Customer}
   * @public
   */
  customer: belongsTo("customer"),
  /**
   * The user
   *
   * @property user
   * @type {User}
   * @public
   */
  user: belongsTo("user"),

  /**
   * Whether the assignee is a reviewer
   *
   * @property isReviewer
   * @type {Boolean}
   * @public
   */
  isReviewer: attr("boolean", { defaultValue: false }),

  /**
   * Whether the assignee is a manager
   *
   * @property isManager
   * @type {Boolean}
   * @public
   */
  isManager: attr("boolean", { defaultValue: false }),

  /**
   * Whether the assignee is a resource
   *
   * @property isResource
   * @type {Boolean}
   * @public
   */
  isResource: attr("boolean", { defaultValue: false }),
});
