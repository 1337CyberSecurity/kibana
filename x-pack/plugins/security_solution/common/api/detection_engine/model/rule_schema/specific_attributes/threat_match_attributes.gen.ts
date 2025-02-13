/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from 'zod';

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Threat Match Rule Attributes
 *   version: not applicable
 */

import { NonEmptyString } from '../common_attributes.gen';

/**
 * Query to execute
 */
export type ThreatQuery = z.infer<typeof ThreatQuery>;
export const ThreatQuery = z.string();

export type ThreatMapping = z.infer<typeof ThreatMapping>;
export const ThreatMapping = z
  .array(
    z.object({
      entries: z.array(
        z.object({
          field: NonEmptyString,
          type: z.literal('mapping'),
          value: NonEmptyString,
        })
      ),
    })
  )
  .min(1);

export type ThreatIndex = z.infer<typeof ThreatIndex>;
export const ThreatIndex = z.array(z.string());

export type ThreatFilters = z.infer<typeof ThreatFilters>;
export const ThreatFilters = z.array(z.unknown());

/**
 * Defines the path to the threat indicator in the indicator documents (optional)
 */
export type ThreatIndicatorPath = z.infer<typeof ThreatIndicatorPath>;
export const ThreatIndicatorPath = z.string();

export type ConcurrentSearches = z.infer<typeof ConcurrentSearches>;
export const ConcurrentSearches = z.number().int().min(1);

export type ItemsPerSearch = z.infer<typeof ItemsPerSearch>;
export const ItemsPerSearch = z.number().int().min(1);
