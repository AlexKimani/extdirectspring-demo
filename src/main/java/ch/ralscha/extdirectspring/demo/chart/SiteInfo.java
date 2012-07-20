/**
 * Copyright 2010-2012 Ralph Schaer <ralphschaer@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ch.ralscha.extdirectspring.demo.chart;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class SiteInfo {

	private final LocalDate date;

	private final int visits;

	private final int views;

	private final int veins;

	public SiteInfo(LocalDate date, int visits, int views, int veins) {
		this.date = date;
		this.visits = visits;
		this.views = views;
		this.veins = veins;
	}

	@JsonSerialize(using = MyLocalDateSerializer.class)
	public LocalDate getDate() {
		return date;
	}

	public int getVisits() {
		return visits;
	}

	public int getViews() {
		return views;
	}

	public int getVeins() {
		return veins;
	}

}
